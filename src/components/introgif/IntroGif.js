import React, { useEffect, useState } from 'react';
// import introGif from '../../src/assets/animations/intro.gif';
import  introGif from '../../assets/animations/intro.gif'
import './IntroGif.css'
const IntroGif = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = introGif;
    image.onload = () => {
      setLoaded(true);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        visibility: loaded ? 'visible' : 'hidden',
        opacity: loaded ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
        background: `url(${introGif}) no-repeat center center fixed `,
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll', // Added for mobile responsiveness

      }}
    />
  );
};

export default IntroGif;
