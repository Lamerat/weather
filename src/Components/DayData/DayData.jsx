import React from "react";
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import { useStyles } from "./DayData.styles";
import { isBrowser } from 'react-device-detect';


const DayData = ({data, settings}) => {
  const styles = useStyles();

  const singleDay = () => {
    const day = new Date (data.date).toLocaleDateString('en-US', {weekday: "short", day: "2-digit"});
    let temps = `${parseInt(data.day.mintemp_c)}° ${parseInt(data.day.maxtemp_c)}°`

    if (settings.tempUnit === 'F') {
      temps = `${parseInt(data.day.mintemp_f)}° ${parseInt(data.day.maxtemp_f)}°`
    }
    
    return (
      isBrowser
        ? <div className={styles.singleDay}>
            <div className={styles.dayName}>{day}</div>
            <div className={styles.middleDiv}>
              <img className={styles.imageStyle} src={data.day.condition.icon} alt='weather' />
              <div className={styles.tempsDiv}>
                {temps}
              </div>
            </div>
            <div className={styles.weatherText}>{data.day.condition.text}</div>
          </div>
        : <div className={styles.singleDay}>
            {day}
            <img className={styles.imageStyle} src={data.day.condition.icon} alt='weather' />
            <div className={styles.tempsDiv}>{temps}</div>
            <div className={styles.weatherText}>{data.day.condition.text}</div>
          </div>
    )
  }
  
  return (
    <div className={styles.mainHolder}>
      {
        data
        ? singleDay()
        : <div className={styles.errorDiv}><CircularProgress /></div>
      }
    </div>
  )
}

DayData.propTypes = {
  data: PropTypes.object,
  settings: PropTypes.object.isRequired,
}

export default DayData;