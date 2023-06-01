import React, { useState } from 'react';
import axios from 'axios';

const energyOptions = [
  'Solar',
  'Wind',
  'HydroElectric',
  'Biomass',
  'Geothermal',
  'Tidal',
  'OtherCleanEnergy',
];

const Energy = () => {
  const [energy, setEnergy] = useState('');
  const [consumption, setConsumption] = useState('');
  const [carbonData, setCarbonData] = useState(null);

  const handleCalculate = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('energy', energy);
    encodedParams.set('consumption', consumption);

    const options = {
      method: 'POST',
      url: 'https://carbon-footprint-calculator-api.p.rapidapi.com/cleanHydro',
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
        <label htmlFor="energy">Clean Energy Source:</label>
        <select
          id="energy"
          value={energy}
          onChange={(e) => setEnergy(e.target.value)}
        >
          <option value="">Select clean energy source</option>
          {energyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="consumption">Energy Consumption (KW):</label>
        <input
          type="text"
          id="consumption"
          value={consumption}
          onChange={(e) => setConsumption(e.target.value)}
        />
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

export default Energy;