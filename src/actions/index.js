export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

export const receiveForecast = (forecastData) => ({
  // action object
});

export const fetchForecast = options => dispatch => {
  // return fetch API call by zip
};

export const fetchCurrentLocationForecast = options => dispatch => {
  // return fetch API call by goelocation
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
  })
};
