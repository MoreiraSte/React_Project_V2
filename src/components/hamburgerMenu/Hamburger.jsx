import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import './style.css'
import { Link, useHistory } from 'react-router-dom';


function Hamburger (){
  let user= JSON.parse(localStorage.getItem('client'))
  const history = useHistory();

  function logOut(){
    localStorage.removeItem()
    history.pushState('/sign-up')
  }
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
              <Link
                onClick={logOut}
                className='menu-item'
              
              >
                logout
              </Link>
        
      </Menu>
    )
}

export default Hamburger