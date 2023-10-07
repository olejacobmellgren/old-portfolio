import React from 'react';
import './Footer.css';
import { useLocation } from 'react-router-dom';


const Footer = () => {

const location = useLocation().pathname;


function scrollToTop() {
    const topElement = document.getElementById("top");
    topElement.scrollIntoView({ behavior: "smooth" });
    }

  return (
    <div className="footer">
      {!location.includes('contact') ? 
        <a onClick={scrollToTop} className='to-top'>
            ^
        </a>
        : null }
    </div>
  );
};

export default Footer;