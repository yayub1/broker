import React from 'react';

function Navbar({ onSignupClick, onLoginClick }) {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <h1>BrokerBride</h1>
            </div>
            <ul className='navbar-links'>
                <li><a href="#home">Home</a></li>
                <li><a href="#Listings">Listings</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#admin">Admin Panel</a></li>
                <li>
                    <button id='signup-btn' onClick={onSignupClick}>Sign Up</button>
                    <button id='login-btn' onClick={onLoginClick}>Login</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;