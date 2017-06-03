var React = require('react');

var WeatherMessage = ({temp, location}) => {
  var text = '';
  var city = '';
  if(temp && location) {
    text = `It is currently ${temp}°F in `;
    city = location;
  }
  return (
    <h3>{text}<span className='city-name'>{city}</span></h3>
  )
};

module.exports = WeatherMessage;
