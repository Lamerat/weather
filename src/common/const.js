export const API_URL_WEATHER = 'http://api.weatherapi.com/v1/forecast.json';

export const WEATHER_KEY = '0efcd722ee444b57849103704210710';

export const WEATHER_LANG = 'en';

export const dialogPrototype = {
  show: false,
  text: 'none',
  closeFunc: () => null,
}

export const defaultSettings = {
  settings: {
    home: 'Pleven',
    tempUnit: 'C',
    rangeUnit: 'km',
    pressureUnit: 'in'
  },

  favorites: [
    { name: 'sofia', info: 'Sofia, Bulgaria' },
    { name: 'chelyabinsk', info: 'Chelyabinsk, Russia' },
    { name: 'dakar', info: 'Dakar, Senegal' },
  ]
}