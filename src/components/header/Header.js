import React from 'react';
import './Header.css';
import { DarkModeContext } from "../DarkModeHandler";
import { useContext } from "react";


const Header = () => {

  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      <div className='marg'>
        <input className='check' type='checkbox' id='check' />
        <label className='checkbtn' for='check'>
          <img className='pic' src="https://icons.veryicon.com/png/o/miscellaneous/line-icon/navicon-1.png" alt="" />
        </label>
        <ul>
          <button activeClassName="active">About</button>
          <button activeClassName="active">Projects</button>
          <button activeClassName="active">Contact</button>
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
