import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const weatherIcon = weatherData.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  return (
    <div className="weather-card card mt-4">
      <div className="card-body">
        <h2 className="card-title">{weatherData.name}, {weatherData.sys.country}</h2>
        <div className="d-flex align-items-center mb-3">
          <img src={iconUrl} alt={weatherData.weather[0].description} className="weather-icon" />
          <span className="display-4 ms-3">{Math.round(weatherData.main.temp)}°C</span>
        </div>
        <p className="card-text text-capitalize">{weatherData.weather[0].description}</p>
        <div className="weather-details row">
          <div className="col-md-6">
            <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
            <p><strong>Pressure:</strong> {weatherData.main.pressure} hPa</p>
          </div>
          <div className="col-md-6">
            <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
            <p><strong>Visibility:</strong> {weatherData.visibility / 1000} km</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;