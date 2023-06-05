import React, { useState } from 'react';
import axios from 'axios';
import bg from '../../assets/animations/fuel-bg.png'

const fuelOptions = ['Petrol', 'Diesel', 'LPG'];

const Fuel = () => {
  const [type, setType] = useState('');
  const [litres, setLitres] = useState('');
  const [carbonData, setCarbonData] = useState(null);

  const handleCalculate = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('type', type);
    encodedParams.set('litres', litres);

    const options = {
      method: 'POST',
      url: 'https://carbon-footprint-calculator-api.p.rapidapi.com/fuelToCO2e',
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
<div className="container" style={{ backgroundImage: `url(${bg})` }}>    <div className="input-container">
    <label htmlFor="type" className="label">Fuel Type:</label>
    <select
      id="type"
      value={type}
      onChange={(e) => setType(e.target.value)}
    >
      <option value="">Select fuel type</option>
      {fuelOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
  <div className="input-container">
    <label htmlFor="litres" className="label">Litres:</label>
    <input
    placeholder='Enter litres'
      type="text"
      id="litres"
      value={litres}
      onChange={(e) => setLitres(e.target.value)}
    />
  </div>
  <button className="calculate-button" onClick={handleCalculate}>Calculate</button>
  {carbonData && (
    <div className="result">
      <p>CO2 Emitted: {carbonData.carbon}</p>
    </div>
  )}
</div>

  );
};

export default Fuel;