import React from 'react';
import "./Navbar.css";
import logo from './React.png';

const Navbar = ({darkmode, toggleDarkMode}) => {
  return (
    <>
      <nav
      className={darkmode? "dark" : ""}
      >
        <img src={logo} alt='react-icon' />
              <h3>React Facts</h3>
        <h4>React Course Project-1</h4>   
         <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
    </nav>
    </>
  )
}

export default Navbar
