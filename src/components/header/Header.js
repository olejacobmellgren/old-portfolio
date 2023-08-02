import React from 'react';
import './Header.css';
import { NavLink, useLocation } from "react-router-dom";
import { DarkModeContext } from "../DarkModeHandler";
import { useContext } from "react";


const Header = () => {

  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const location = useLocation();

  return (
    <div>
      <div className='marg' id='top'>
        <input className='check' type='checkbox' id='check' />
        <label className='checkbtn' for='check'>
          <img className='pic' src="https://www.pngkit.com/png/full/239-2394744_icon-open-nav-icon-white.png" alt="" />
        </label>
        <ul>
          <NavLink to="/" className={location.pathname === '/' ? 'button selected' : 'button'}>
            <button >
              About
            </button>
          </NavLink>
          <NavLink to="/projects">
            <button className={location.pathname === '/projects' ? 'button selected' : 'button'} >
              Projects
            </button>
          </NavLink>
          <NavLink to="/contact">
            <button className={location.pathname === '/contact' ? 'button selected' : 'button'}>
              Contact
            </button>
          </NavLink>
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
    </div>
  );
};

export default Header;
