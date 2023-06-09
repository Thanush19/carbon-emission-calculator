import React, { useState } from 'react';
import axios from 'axios';
import bg from '../../assets/animations/fligth-bg-2.png';
const flightOptions = [
  'DomesticFlight',
  'ShortEconomyClassFlight',
  'ShortBusinessClassFlight',
  'LongEconomyClassFlight',
  'LongPremiumClassFlight',
  'LongBusinessClassFlight',
  'LongFirstClassFlight',
];

const Flight = () => {
  const [distance, setDistance] = useState('');
  const [type, setType] = useState('');
  const [carbonData, setCarbonData] = useState(null);

  const handleCalculate = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('distance', distance);
    encodedParams.set('type', type);

    const options = {
      method: 'POST',
      url: 'https://carbon-footprint-calculator-api.p.rapidapi.com/flight',
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
<div className="container" style={{ backgroundImage: `url(${bg})` }}>
  <div className="input-container">
    <label htmlFor="distance" className="label">Flight Distance (KM):</label>
    <input
      type="text"
      id="distance"
      value={distance}
      placeholder='Enter distance in KM'
      onChange={(e) => setDistance(e.target.value)}
    />
  </div>
  <div className="input-container">
    <label htmlFor="type" className="label">Type of Flight:</label>
    <select
      id="type"
      value={type}
      onChange={(e) => setType(e.target.value)}
    >
      <option value="">Select flight type</option>
      {flightOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
  <button className="calculate-button" onClick={handleCalculate}>Calculate</button>
  {carbonData && (
    <div className="result">
      <p>CO2 emitted: {carbonData.carbon}</p>
    </div>
  )}
</div>

  );
};

export default Flight;
