import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL; // Your backend server URL
const worldWeatherApiKey = import.meta.env.VITE_WORLD_WEATHER_API_KEY;

function Map() {
  const [city, setCity] = useState("");
  const [surfSpots, setSurfSpots] = useState([]);
  const [center, setCenter] = useState([0, 0]);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [error, setError] = useState(null);

  // Fetch city coordinates using your backend's geocoding endpoint
  const fetchCityCoordinates = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/geocode?city=${encodeURIComponent(city)}`
      );

      // Check if the Geocoding API returned no results
      if (response.data.status === "ZERO_RESULTS") {
        setError("No results found for the city. Please try again.");
        return null;
      }

      // Extract latitude and longitude from the first result
      const { lat, lng } = response.data.results[0].geometry.location;
      setCenter([lat, lng]);
      return { lat, lng };
    } catch (error) {
      console.error("Error fetching city coordinates:", error);
      setError("Unable to find the city. Please try again.");
      return null;
    }
  };

  // Fetch nearby beaches using your backend's nearby-beaches endpoint
  const fetchNearbyBeaches = async (lat, lng, radius = 10000) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/nearby-beaches?lat=${lat}&lng=${lng}&radius=${radius}`
      );

      // Process the response to create beach objects
      const beaches = response.data.results.map((beach) => ({
        name: beach.name,
        lat: beach.lat,
        lng: beach.lng,
      }));

      return beaches;
    } catch (error) {
      console.error("Error fetching nearby beaches:", error);
      setError("Unable to fetch nearby beaches. Please try again.");
      return [];
    }
  };

  // Fetch marine weather data for a specific beach
  const fetchBeachWeather = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://api.worldweatheronline.com/premium/v1/marine.ashx?key=${worldWeatherApiKey}&q=${lat},${lng}&format=json&tide=yes`
      );

      const weather = response.data.data.weather[0].hourly[0];
      return {
        waveHeight: weather.sigHeight_m,
        windSpeed: weather.windspeedKmph,
        swellHeight: weather.swellHeight_m,
        swellDirection: weather.swellDir16Point,
        waterTemp: weather.waterTemp_C,
      };
    } catch (error) {
      console.error("Error fetching beach weather:", error);
      return null;
    }
  };

  // Handle city search
  const handleSearch = async () => {
    const coordinates = await fetchCityCoordinates();
    if (coordinates) {
      const { lat, lng } = coordinates;

      // Fetch nearby beaches
      const beaches = await fetchNearbyBeaches(lat, lng);

      // Fetch weather data for each beach
      const spots = await Promise.all(
        beaches.map(async (beach) => {
          const weather = await fetchBeachWeather(beach.lat, beach.lng);
          return {
            ...beach,
            weather,
          };
        })
      );

      setSurfSpots(spots.filter((spot) => spot.weather));
      setError(null);
    }
  };

  // Handle marker click
  const handleMarkerClick = (spot) => {
    setSelectedSpot(spot);
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search for a city"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <MapContainer
        center={center}
        zoom={7}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {surfSpots.map((spot, index) => (
          <Marker
            key={index}
            position={[spot.lat, spot.lng]}
            eventHandlers={{
              click: () => handleMarkerClick(spot),
            }}
          >
            <Popup>
              <b>{spot.name}</b>
              <div>
                Wave Height: {spot.weather.waveHeight}m
                <br />
                Wind Speed: {spot.weather.windSpeed} km/h
                <br />
                Swell Height: {spot.weather.swellHeight}m
                <br />
                Swell Direction: {spot.weather.swellDirection}
                <br />
                Water Temperature: {spot.weather.waterTemp}°C
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {selectedSpot && (
        <div>
          <h3>{selectedSpot.name}</h3>
          <p>Latitude: {selectedSpot.lat}</p>
          <p>Longitude: {selectedSpot.lng}</p>
          <p>Wave Height: {selectedSpot.weather.waveHeight}m</p>
          <p>Wind Speed: {selectedSpot.weather.windSpeed} km/h</p>
          <p>Swell Height: {selectedSpot.weather.swellHeight}m</p>
          <p>Swell Direction: {selectedSpot.weather.swellDirection}</p>
          <p>Water Temperature: {selectedSpot.weather.waterTemp}°C</p>
        </div>
      )}
    </div>
  );
}

export default Map;
