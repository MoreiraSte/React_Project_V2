import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import '../hamburgerMenu/style.css'
import { Link } from 'react-router-dom';


function Hamburger (){
    return(
        <Menu right >
          <Link to='/' className='menu-item'>
                Home
              </Link>
              <Link
                to='/about'
                className='menu-item'
              >
                About
              </Link>
              <Link
                to='/services'
                className='menu-item'
             
              >
                Services
              </Link>
              <Link
                to='/download'
                className='menu-item'
              
              >
                Download app
              </Link>
              <Link
                to='/sign-up'
                className='menu-item'
              
              >
                Sign In
              </Link>
        
      </Menu>
    )
}

export default Hamburger