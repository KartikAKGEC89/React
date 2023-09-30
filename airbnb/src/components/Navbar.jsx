import React from 'react'
import './Navbar.css'
import logo from './airbnb.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='airbnb logo' className='airbnb-logo' />
        
    </nav>
  )
}

export default Navbar;
