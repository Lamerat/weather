import React, {forwardRef, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Slide from '@mui/material/Slide';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import HomeIcon from '@mui/icons-material/Home';
import SpeedIcon from '@mui/icons-material/Speed';
import CompressIcon from '@mui/icons-material/Compress';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from './SettingsDialog.styles';
import PropTypes from 'prop-types';


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});


const SettingsDialog = ({data, setData, saveFunc, closeFunc}) => {
  const styles = useStyles();

  const [values, setValues] = useState(data);

  const changeValue = (field, newValue) => {
    const newData = {...values.settings, [field]: newValue}
    setValues({...values, settings: newData});
  }

  const saveData = () => {
    setData(values)
    saveFunc(values);
    closeFunc(false);
  }

  return (
    <Dialog
      open={true}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => closeFunc(false)}
    >
      <DialogTitle>Settings</DialogTitle>
        <div className={styles.mainHolder}>
          <HomeIcon sx={{ m: 1}} color='secondary'/>
          <div className={styles.textStyle}>Home</div>
          <TextField
            sx={{ m: 1, minWidth: 50, }}
            variant='outlined'
            color='secondary'
            size='small'
            value={values.settings.home}
            onChange={(e) => changeValue('home', e.target.value)}
          />
          <ThermostatIcon sx={{ m: 1}} color='secondary'/>
          <div className={styles.textStyle}>Temperature</div>
          <FormControl sx={{ m: 1, minWidth: 50 }}>
            <Select
              size='small'
              color='secondary'
              value={values.settings.tempUnit}
              onChange={(e) => changeValue('tempUnit', e.target.value)}
            >
              <MenuItem value={'C'}>Celsius (C&deg;)</MenuItem>
              <MenuItem value={'F'}>Fahrenheit (F&deg;)</MenuItem>
            </Select>
          </FormControl>
          <SpeedIcon sx={{ m: 1}} color='secondary'/>
          <div className={styles.textStyle}>Speed/Range</div>
          <FormControl sx={{ m: 1, minWidth: 50 }}>
            <Select
              size='small'
              color='secondary'
              value={values.settings.rangeUnit}
              onChange={(e) => changeValue('rangeUnit', e.target.value)}
            >
              <MenuItem value={'km'}>Kilometers (km)</MenuItem>
              <MenuItem value={'mi'}>Miles (mi)</MenuItem>
            </Select>
          </FormControl>
          <CompressIcon sx={{ m: 1}} color='secondary'/>
          <div className={styles.textStyle}>Pressure</div>
          <FormControl sx={{ m: 1, minWidth: 50 }}>
            <Select
              size='small'
              color='secondary'
              value={values.settings.pressureUnit}
              onChange={(e) => changeValue('pressureUnit', e.target.value)}
            >
              <MenuItem value={'in'}>Inches of mercury (in)</MenuItem>
              <MenuItem value={'mb'}>Millibars (mb)</MenuItem>
            </Select>
          </FormControl>
        </div>
      <DialogActions className={styles.buttons}>
        <Button startIcon={<SaveIcon />} variant='contained' color='warning' className={styles.test} onClick={saveData}>Save</Button>
        <Button startIcon={<CloseIcon />} variant='contained' color='secondary' onClick={() => closeFunc(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

SettingsDialog.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  saveFunc: PropTypes.func.isRequired,
  closeFunc: PropTypes.func.isRequired,
}

export default SettingsDialog;