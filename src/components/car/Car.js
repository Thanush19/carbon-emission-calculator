import React, { useState } from 'react';
import axios from 'axios';

const carOptions = [
  'SmallDieselCar',
  'MediumDieselCar',
  'LargeDieselCar',
  'MediumHybridCar',
  'LargeHybridCar',
  'MediumLPGCar',
  'LargeLPGCar',
  'MediumCNGCar',
  'LargeCNGCar',
  'SmallPetrolVan',
  'LargePetrolVan',
  'SmallDieselVan',
  'MediumDieselVan',
  'LargeDieselVan',
  'LPGVan',
  'CNGVan',
  'SmallPetrolCar',
  'MediumPetrolCar',
  'LargePetrolCar',
];

const Car = () => {
  const [distance, setDistance] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [carbonData, setCarbonData] = useState(null);

  const handleCalculate = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('distance', distance);
    encodedParams.set('vehicle', vehicle);

    const options = {
      method: 'POST',
      url: 'https://carbon-footprint-calculator-api.p.rapidapi.com/carTravel',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'ef6dd4b1b5mshaecf237dfd69a1bp146177jsndc7e31dc1f12',
        'X-RapidAPI-Host': 'carbon-footprint-calculator-api.p.rapidapi.com',
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      setCarbonData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
  <div className="input-container">
    <label htmlFor="distance" className="label">Distance (KM):</label>
    <input
      type="text"
      id="distance"
      value={distance}
      onChange={(e) => setDistance(e.target.value)}
    />
  </div>
  <div className="input-container">
    <label htmlFor="vehicle" className="label">Type of Car:</label>
    <select
      id="vehicle"
      value={vehicle}
      onChange={(e) => setVehicle(e.target.value)}
    >
      <option value="">Select car type</option>
      {carOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
  <button className="calculate-button" onClick={handleCalculate}>Calculate</button>
  {carbonData && (
    <div className="result">
      <p>Carbon: {carbonData.carbon}</p>
    </div>
  )}
</div>

  );
};

export default Car;
