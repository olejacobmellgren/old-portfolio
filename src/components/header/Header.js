import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";
import { DarkModeContext } from "../DarkModeHandler";
import { useContext } from "react";


const Header = () => {

  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      <div className='marg'>
        <input className='check' type='checkbox' id='check' />
        <label className='checkbtn' for='check'>
          <img className='pic' src="https://www.pngkit.com/png/full/239-2394744_icon-open-nav-icon-white.png" alt="" />
        </label>
        <ul>
          <NavLink to="/">
            <button >
              About
            </button>
          </NavLink>
          <NavLink to="/projects">
            <button  >
              Projects
            </button>
          </NavLink>
          <NavLink to="/contact">
            <button >
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
