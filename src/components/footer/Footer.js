import React from 'react';
import './Footer.css';


const Footer = () => {


function scrollToTop() {
    const topElement = document.getElementById("top");
    topElement.scrollIntoView({ behavior: "smooth" });
    }

  return (
    <div>
      <div className='footer'>
        <a href='#top' onClick={scrollToTop} className='to-top'>
            Go To Top
        </a>
      </div>
    </div>
  );
};

export default Footer;