var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It is {temp} and the location is {location}</h3>
  )
};

module.exports = WeatherMessage;
