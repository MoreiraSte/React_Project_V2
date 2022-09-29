import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Hamburger from './hamburgerMenu/Hamburger'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' >
            CasiBank
          </Link>
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
              
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
             
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/download'
                className='nav-links'
              
              >
                Download app
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
              
              >
                Sign In
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
        </div>
      <Hamburger/>
      </nav>
    </>
  );
}

export default Navbar;
