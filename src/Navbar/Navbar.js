import React from 'react';
import './Navbar.css'
import logo from '../images/gymicon.png'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-heading' >
            <img src={logo} alt="" />
            <h1>GYM CLUB</h1>
            </div>
            <h1 className='navbar-text'>Select today's exercise</h1>
        </div>
    );
};

export default Navbar;