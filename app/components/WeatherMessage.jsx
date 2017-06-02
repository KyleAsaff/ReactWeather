var React = require('react');

var WeatherMessage = ({temp, location}) => {
  var text = '';
  if(temp && location) {
    text = `It is ${temp} and the location is ${location}`;
  }
  return (
    <h3>{text}</h3>
  )
};

module.exports = WeatherMessage;
