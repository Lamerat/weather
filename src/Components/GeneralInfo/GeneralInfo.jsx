import React from 'react';
import { useStyles } from './GeneralInfo.styles';

const GeneralInfo = ({weatherData, settings}) => {
  const styles = useStyles();
  
  return (
    <div className={styles.middleDiv}>
        <div className={styles.leftDiv}>
          <div className={styles.degreesDiv}>
            {
              settings.tempUnit === 'C'
                ? parseInt(weatherData.current.temp_c)
                : parseInt(weatherData.current.temp_f)
            }&deg;
            <span className={styles.degreeSymbol}>{settings.tempUnit}</span>
          </div>
          <div className={styles.cityData}>
            {weatherData.location.name}, {weatherData.location.country}
          </div>
          <div className={styles.cityData}>
            {weatherData.location.localtime}
          </div>
        </div>
        <table className={styles.tableStyle}>
          <tbody>
            <tr>
              <td className={styles.weatherText} colSpan='2'>{weatherData.current.condition.text}</td>
            </tr>
            <tr>
              <td className={styles.tdLeft}>Feels Like: &nbsp;
                { 
                  settings.tempUnit === 'C'
                    ? weatherData.current.feelslike_c
                    : weatherData.current.feelslike_f
                } &deg;
              </td>
              <td className={styles.td}>
                Wind: 
                {
                  settings.rangeUnit === 'km'
                  ? ` ${weatherData.current.wind_kph} kph`
                  : ` ${weatherData.current.wind_mph} mph`
                }
              </td>
            </tr>
            <tr>
              <td className={styles.tdLeft}>Pressure: 
                {
                  settings.pressureUnit === 'in'
                    ? ` ${weatherData.current.pressure_in} in`
                    : ` ${weatherData.current.pressure_mb} mb`
                }
              </td>
              <td className={styles.td}>Visibility:
                {
                  settings.rangeUnit === 'km'
                  ? ` ${weatherData.current.vis_km} km`
                  : ` ${weatherData.current.vis_miles} mi`
                }
              </td>
            </tr>
            <tr>
              <td className={styles.tdLeft}>Humidity: {weatherData.current.humidity} %</td>
              <td className={styles.td}>Rain Chance: {weatherData.forecast.forecastday[0].day.daily_chance_of_rain} %</td>
            </tr>
            <tr>
              <td className={styles.tdLeft}>Sunrise: {weatherData.forecast.forecastday[0].astro.sunrise}</td>
              <td className={styles.td}>Sunset: {weatherData.forecast.forecastday[0].astro.sunset}</td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default GeneralInfo;