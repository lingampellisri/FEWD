import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Lab6 = () => {
  const [weather, setWeather] = useState(null);      // to store weather data
  const [loading, setLoading] = useState(true);      // to show loading state
  const [error, setError] = useState(null);          // to handle any error

  const city = "Hyderabad";
  const apiKey = '61a1d8419f9d307924240958d89e284d'; // Replace with your actual OpenWeatherMap API key

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        setWeather(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  // Loading state
  if (loading) return <p>Loading weather...</p>;

  // Error state
  if (error) return <p>Error fetching weather: {error.message}</p>;

  // Success state
  return (
    <div>
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Lab6;
