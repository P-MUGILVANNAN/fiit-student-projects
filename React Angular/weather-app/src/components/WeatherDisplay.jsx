import React, { useState } from 'react';
import { getWeatherByCity } from '../services/weatherService';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    try {
      const data = await getWeatherByCity(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-display container mt-5">
      <h1 className="text-center mb-4">Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default WeatherDisplay;