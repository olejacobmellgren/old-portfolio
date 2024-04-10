import React from 'react';
import './Header.css';
import { NavLink, useLocation } from "react-router-dom";
import { DarkModeContext } from "../DarkModeHandler";
import { useContext } from "react";


const Header = () => {

  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const location = useLocation();

  function removeMenu() {
    document.getElementById('check').checked = false;
  }

  return (
    <div className='header' id='top'>
      <input className='check' type='checkbox' id='check' />
      <label className='checkbtn' htmlFor='check'>
        <img className='pic' src="https://www.pngkit.com/png/full/239-2394744_icon-open-nav-icon-white.png" alt="" />
      </label>
      <ul className="menu">
        <div className='menu-items'>
        <NavLink to="/" >
          <button onClick={removeMenu} className={location.pathname === '/' ? 'selected' : 'unselected'}>
            Om meg
          </button>
        </NavLink>
        <NavLink to="/projects">
          <button onClick={removeMenu} className={location.pathname === '/projects' ? 'selected' : 'unselected'} >
            Prosjekter
          </button>
        </NavLink>
        <NavLink to="/contact">
          <button onClick={removeMenu} className={location.pathname === '/contact' ? 'selected' : 'unselected'}>
            Kontakt meg
          </button>
        </NavLink>
        </div>
        
        <div className="switch">
          <input
            className="toggle"
            type="checkbox"
            checked={darkMode}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              setDarkMode(e.target.checked);
            }}
          />
        </div>
      </ul>
    </div>
  );
};

export default Header;
