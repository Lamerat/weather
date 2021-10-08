import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';
import Tooltip from '@mui/material/Tooltip';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GeneralInfo from '../GeneralInfo/GeneralInfo';
import InfoDialog from '../InfoDialog/InfoDialog';
import CircularProgress from '@mui/material/CircularProgress';
import SettingsDialog from '../SettingsDialog/SettingsDialog';
import DayData from '../DayData/DayData';
import { useStyles } from './MainPanel.styles';
import { getMyIpLocation, getWeatherData } from '../../common/requests';
import { defaultSettings, dialogPrototype } from '../../common/const';
import { isBrowser } from 'react-device-detect';

const sets = JSON.parse(window.localStorage.getItem('weatherSettings')) || defaultSettings;

const MainPanel = () => {
  const styles = useStyles();
  const [weatherData, setWeatherData] = useState(null);
  const [town, setTown] = useState(sets.settings.home);
  const [showFav, setShowFav] = useState(false);
  const [favTown, setFavTown] = useState('');
  const [searchPlace, setSearchPlace] = useState('');
  const [dialogProps, setDialogProps] = useState(dialogPrototype);
  const [settings, setSettings] = useState(sets);
  const [settingsDialog, setSettingsDialog] = useState(false);

  useEffect(() => {
    getWeatherData(town).then(result => {
      if (result.error) {
        setDialogProps({show: true, text: result.error.message, closeFunc: setDialogProps})
        return;
      }
      setWeatherData(result)
    }).catch(e => {
      setDialogProps({show: true, text: e.message, closeFunc: setDialogProps})
    });
  }, [town]);

  const saveSettings = (settingsData) => window.localStorage.setItem('weatherSettings', JSON.stringify(settingsData));

  const getMyLocation = () => {
    getMyIpLocation()
    .then(result => setTown(result.city))
    .catch(e => setDialogProps({show: true, text: e.message, closeFunc: setDialogProps}))
  }

  const sendRequest = (key) => setTown(searchPlace);
  
  const updateFav = (chosenTown) => {
    setTown(chosenTown);
    setFavTown(chosenTown);
  }

  const addFavorite = (city, country) => {
    const newRecord = [...settings.favorites, { name: city, info: `${city}, ${country}`}];
    saveSettings({...settings, favorites: newRecord});
    setSettings({...settings, favorites: newRecord});
  }

  const removeFavorite = (city) => {
    const newList = settings.favorites.filter(x => x.name.toLowerCase() !== city.toLowerCase());

    if (favTown === city) {
      setFavTown(newList[0].name);
    }
    saveSettings({...settings, favorites: newList});
    setSettings({...settings, favorites: newList});
  }

  const renderFavButton = (cityName, country) => {
    const checkAction = settings.favorites.filter(x => x.name.toLowerCase() === cityName.toLowerCase()).length;

    return (
      <Tooltip title={checkAction ? 'Remove from Favorites' : 'Add to Favorites'} arrow>
        <IconButton onClick={checkAction ? () => removeFavorite(cityName) : () => addFavorite(cityName, country)} size={isBrowser ? 'medium' : 'small'}>
          { checkAction ? <FavoriteIcon color='primary'/> : <FavoriteBorderIcon color='primary'/> }
        </IconButton>
      </Tooltip>
    )
  }

  return (
    <div className={styles.mainDiv} >
      <div className={styles.toolbarDiv}>
        <FormControl variant='outlined'>
          <OutlinedInput
            type='text'
            placeholder='Search'
            size='small'
            className={styles.searchField}
            value={searchPlace}
            onChange={(e) => setSearchPlace(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' ? sendRequest(e.key) : null}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton edge='end' onClick={sendRequest}>
                  <SearchIcon color='primary'/>
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className={isBrowser ? styles.buttonsBar : styles.mobileMenu}>
          {
            weatherData
            ? renderFavButton(weatherData.location.name, weatherData.location.country)
            : null
          }
          <Tooltip title={showFav ? 'Hide Favorites' : 'Show Favorites'} arrow>
            <IconButton onClick={() => setShowFav(!showFav)} size={isBrowser ? 'medium' : 'small'}>
              <StarIcon color='primary'/>
            </IconButton>
          </Tooltip>

          <Tooltip title='My home place' arrow>
            <IconButton onClick={() => setTown(settings.settings.home)} size={isBrowser ? 'medium' : 'small'}>
              <HomeIcon color='primary'/>
            </IconButton>
          </Tooltip>

          <Tooltip title='Current place' arrow>
            <IconButton onClick={getMyLocation} size={isBrowser ? 'medium' : 'small'}>
              <LocationOnIcon color='primary'/>
            </IconButton>
          </Tooltip>

          <Tooltip title='Settings' arrow>
            <IconButton onClick={() => setSettingsDialog(true)} size={isBrowser ? 'medium' : 'small'}>
              <SettingsIcon color='primary'/>
            </IconButton>
          </Tooltip>
        </div>
      </div>

      <div className={styles.favoritesBar}>
        {
          showFav
          ? <FormControl className={styles.test}>
              <Select
                size='small'
                className={styles.selectStyle}
                value={favTown}
                onChange={(e) => updateFav(e.target.value)}
              >
                {
                  settings
                  ? settings.favorites.map((fav, index) => <MenuItem key={index} value={fav.name}>{fav.info}</MenuItem>)
                  : null
                }
              </Select>
            </FormControl>
          : null
        }
      </div>
      {
        weatherData
        ? <GeneralInfo weatherData={weatherData} settings={settings.settings}/>
        : <div className={styles.progressDiv}><CircularProgress size='60px'/></div>
      }

      {
        dialogProps.show
        ? <InfoDialog text={dialogProps.text} closeFunc={setDialogProps}/>
        : null
      }
      {
        settingsDialog
        ? <SettingsDialog data={settings} setData={setSettings} saveFunc={saveSettings} closeFunc={setSettingsDialog} />
        : null
      }
      <div className={styles.weekDays}>
        {
          weatherData
          ? weatherData.forecast.forecastday
            .slice(1).concat(weatherData.forecast.forecastday
            .slice(1)).map((day, index) => <DayData key={index} data={day} settings={settings.settings} />)
          : new Array(4).fill(null).map((day, index) => <DayData key={index} data={day} settings={settings.settings} />)
        }
      </div>
    </div>
  )
}

export default MainPanel;