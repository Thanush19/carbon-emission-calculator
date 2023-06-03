import React, { useState } from 'react';
import axios from 'axios';
import './Aqhi.css'
// air quaity  health index 

const Aqhi = () => {
  const [o3, setO3] = useState('');
  const [no2, setNo2] = useState('');
  const [pm, setPm] = useState('');
  const [carbonData, setCarbonData] = useState(null);

  const handleCalculate = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('o3', o3);
    encodedParams.set('no2', no2);
    encodedParams.set('pm', pm);

    const options = {
      method: 'POST',
      url: 'https://carbon-footprint-calculator-api.p.rapidapi.com/airQualityHealthIndex',
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
      <h1>Carbon emission due to Ozone , Nitrate and Particulate matter emission</h1>
    <div className="input-container">
      <label htmlFor="o3" className="label">O3:</label>
      <input
        type="text"
        id="o3"
        value={o3}
        onChange={(e) => setO3(e.target.value)}
      />
    </div>
    <div className="input-container">
      <label htmlFor="no2" className="label">NO2:(ppb)</label>
      <input
        type="text"
        id="no2"
        value={no2}
        onChange={(e) => setNo2(e.target.value)}
      />
    </div>
    <div className="input-container">
      <label htmlFor="pm" className="label">Particulate Matter (ug/m3):</label>
      <input
        type="text"
        id="pm"
        value={pm}
        onChange={(e) => setPm(e.target.value)}
      />
    </div>
    <button onClick={handleCalculate}>Calculate</button>
    {carbonData && (
      <div className="result">
        <p>Carbon: {carbonData.carbon}</p>
        {/* <p>Success: {carbonData.success.toString()}</p> */}
      </div>
    )}
  </div>
  
  );
};

export default Aqhi;
