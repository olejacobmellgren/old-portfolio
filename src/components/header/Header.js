import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        {/* Add your navigation links here */}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
