import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import bg from '../../assets/animations/home-bg-1.png'

const Home = () => {
  

  return (
    <>
    <div
      className="home-container"
      
    >
      <div className="background-image" style={{ backgroundImage: `url(${bg})` }}></div>

     <div className="content-container">
      <p className="heading">
        Welcome to the Carbon-Di-Oxide Emission Calculator!
        <br />
        
      </p>
      <p className='Tagline'>Calculating Our Footprint for a <span  className='greener'>Greener Tomorrow!</span></p>

      <p className="scenarios float">Calculate CO2 emission in the following scenarios:</p>
      <div className="links-container">
        <div className="links">
          {/* <Link to="/aqhi" className="link">
            <button>Calculate CO2 emission due to Ozone, Nitrate, and Particulate matter emission</button>
          </Link> */}

        </div>
      
        <div className="links">
          <Link to="/public-transit" className="link">
            <button>Calculate CO2 emission due to various public transportation</button>
          </Link>

        </div>

       
        <div className="links">
          <Link to="/motorbike" className="link">
            <button>Calculate CO2 emission due to various Varients of  Motorbikes</button>
          </Link>


        </div>

        
        <div className="links">
          <Link to="/flight" className="link">
            <button>Calculate CO2 emission due various  to Flight</button>
          </Link>

          
        </div>

       
        {/* <div className="links">
          <Link to="/flight" className="link">
            <button>Calculate Carbon emission due various  to Flight</button>
          </Link>
            
        </div> */}

        <div className="links">
          <Link to="/car" className="link">
            <button>Calculate CO2 emission due to various Varients of Car</button> 
          </Link>
          
        </div>

       
        <div className="links">
           <Link to="/fuel" className="link">
            <button>Calculate CO2 emission due to various Fuel</button>
          </Link>


        </div>

       
        <div className="links">
          <Link to="/energy" className="link">
            <button>Calculate CO2 emission due to various  Energy resources</button>
          </Link>


        </div>

        
      </div>
    </div>
    </div>

      </>
  );
};

export default Home;

          
