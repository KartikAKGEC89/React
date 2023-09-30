import React from 'react';
import "./Navbar.css";
import logo from './React.png';

const Navbar = () => {
  return (
    <>
      <nav>
        <img src={logo} alt='react-icon' />
              <h3>React Facts</h3>
              <h4>React Course Project-1</h4>          
    </nav>
    </>
  )
}

export default Navbar
