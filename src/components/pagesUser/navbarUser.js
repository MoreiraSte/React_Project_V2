import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './navbarUser.css';
import Hamburger from './hamburgerMenu/Hamburger'
import { useHistory } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const history = useHistory();

  const logout = () => {   
    history.push('/')
  }

  return (
    <>
    
      <nav className='navbar'>
        <div className='navbar-container'>
          
        <h2 id='h2Text'>Bem-vindo User</h2>
         
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links'>
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
                onClick={logout}
                className='nav-links-mobile'
              
              >
                Logout
              </Link>
            </li>
          </ul>
          {button && <Button className='btn' buttonStyle='btn--outline' >Logout</Button>}
        </div>
        <Hamburger />
      </nav>
    </>
  );
}

export default Navbar;
