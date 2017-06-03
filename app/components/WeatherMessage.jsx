var React = require('react');

var WeatherMessage = ({temp, location}) => {
  var text = '';
  var city = '';
  if(temp && location) {
    text = `It is currently ${temp}°F in `;
    city = location;
  }
  return (
    <div>
      <h3>{text}</h3>
      <h3 className='city-name'>{city}</h3>
    </div>
  )
};

module.exports = WeatherMessage;
