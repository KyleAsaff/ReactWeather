var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=e5515c277c628838ec3f23d8c3da9000&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (resp) {
      if(resp.data.cod && resp.data.message) {
        throw new Error(resp.data.message);
      } else {
        return resp.data.main.temp;
      }
    }, function(resp) {
      throw new Error(resp.data.message);
    });
    //return new Promise
  }
}
