import React, { useState } from 'react';
import axios from 'axios';

const motorbikeOptions = ['SmallMotorBike', 'MediumMotorBike', 'LargeMotorBike'];

const Motorbike = () => {
  const [distance, setDistance] = useState('');
  const [type, setType] = useState('');
  const [carbonData, setCarbonData] = useState(null);

  const handleCalculate = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('distance', distance);
    encodedParams.set('type', type);

    const options = {
      method: 'POST',
      url: 'https://carbon-footprint-calculator-api.p.rapidapi.com/motorBike',
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
    <div>
      <div>
        <label htmlFor="distance">Distance (KM):</label>
        <input
          type="text"
          id="distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="type">Type of Motorbike:</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select motorbike type</option>
          {motorbikeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {carbonData && (
        <div>
          <p>Carbon: {carbonData.carbon}</p>
          <p>Success: {carbonData.success.toString()}</p>
        </div>
      )}
    </div>
  );
};

export default Motorbike;
