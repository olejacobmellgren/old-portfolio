import React from 'react';
import './Footer.css';


const Footer = () => {


function scrollToTop() {
    const topElement = document.getElementById("top");
    topElement.scrollIntoView({ behavior: "smooth" });
    }

  return (
    <div className="footer">
        <a onClick={scrollToTop} className='to-top'>
            ^
        </a>
    </div>
  );
};

export default Footer;