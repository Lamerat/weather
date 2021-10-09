import { API_URL_WEATHER, WEATHER_KEY, WEATHER_LANG, API_URL_GEOLOCATION } from './const.js';

export const getWeatherData = (town = 'Sofia') => {
  const address = `${API_URL_WEATHER}?key=${WEATHER_KEY}&q=${town}&days=5&aqi=no&alerts=no&lang=${WEATHER_LANG}&hour=24`;
  return fetch(address).then(response => response.json()).catch(e => console.log(e.message));
}

export const getMyIpLocation = () => {
  return fetch(API_URL_GEOLOCATION).then(response => response.json());
}