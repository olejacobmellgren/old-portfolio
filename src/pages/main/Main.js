import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="hero">
      <video autoplay loop muted plays-inline>
        {/* <source src='images/night.mp4' type="video/mp4" /> */}
        {/* <source src="images/night.webm" type="video/webm" /> */}
        <source src="images/night.ogv" type="video/ogg" />
      </video>
      <div className='about'>
        <h1>About me</h1>
        <p>This is the About pageee content.</p>
      </div>
    </div>
  );
};

export default Main;
