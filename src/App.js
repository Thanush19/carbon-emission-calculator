import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import IntroGif from './components/IntroGif';
import Aqhi from './components/aqhi/Aqhi';
import PublicTransit from './components/public-transit/PublicTransit';
import Motorbike from './components/motorbike/MotorBike';
import Flight from './components/flight/Flight';
import Car from './components/car/Car';
import Fuel from './components/fuel/Fuel';
import Energy from './components/energy/Energy';
import './App.css';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowIntro(false);
    }, 5000); // Set the duration of the GIF in milliseconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
        {showIntro ? (
          <IntroGif />
        ) : (
          <div className="fade-in">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aqhi" element={<Aqhi />} />
              <Route path="/public-transit" element={<PublicTransit />} />
              <Route path="/motorbike" element={<Motorbike />} />
              <Route path="/flight" element={<Flight />} />
              <Route path="/car" element={<Car />} />
              <Route path="/fuel" element={<Fuel />} />
              <Route path="/energy" element={<Energy />} />
            </Routes>
          </div>
        )}
    </div>
  );
};

export default App;
