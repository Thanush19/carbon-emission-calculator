import React from 'react';
import Aqhi from './components/aqhi/Aqhi';
import PublicTransit from './components/public-transit/PublicTransit';
import Motorbike from './components/motorbike/MotorBike';
import Flight from './components/flight/Flight';
import Car from './components/car/Car';
import Fuel from './components/fuel/Fuel';
import Energy from './components/energy/Energy';


const App = () => {
  return (
    <div className="App">
      <Aqhi />
      <PublicTransit />
      <Motorbike  />
      <Flight />
      <Car />
      <Fuel />
      <Energy />
    </div>
  );
};

export default App;