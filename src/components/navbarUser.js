import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './navbarUser.css';
import Hamburger from './hamburgerMenu/Hamburger'
import { useHistory } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [test, setTest] = useState(true);
  const [logado, setLogado] = useState(false);
  const history = useHistory();
  // const [, updateState] = React.useState();
  // const forceUpdate = React.useCallback(() => updateState({}), []);
  useEffect(() => {
    if(history == null){
      return
    }
    const unlisten = history.listen((location) => {
      console.log('new location: ', location)
      if(localStorage.getItem('client') == undefined){
        setLogado(false)
      }
      else{
        setLogado(true)
      }
    })
    return function cleanup() {
      unlisten()
    }
  }, [])


  const logout = () => {   
    
    localStorage.removeItem('client')
    console.log('funcionou')
    setTest(false)
    setTimeout(() => {
      
      history.push('/home')
    }, 2000);
   
  }

  return (
    <>
    {logado? (
      <><nav className='navbar'>
      <div className='navbar-container'>
        
      <h2 id='h2Text'>Bem-vindo</h2>
       
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
              
              className='nav-links-mobile'
            
            >
              Logout
            </Link>
          </li>
        </ul>
        {button && <Button onClick={logout} className='btn' buttonStyle='btn--outline' >Logout</Button>}
        
      </div>
      <Hamburger />
    </nav></>
    ):
      <><nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/home' className='navbar-logo' >
          CasiBank
        </Link>
        
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
              to='/sign-up'
              className='nav-links-mobile'
            
            >
              Sign In
            </Link>
          </li>
        </ul>
        {button && <Button className='btn' buttonStyle='btn--outline' >SIGN IN</Button>}
      </div>
      <Hamburger />
    </nav></>
    }
    
      
    </>
  );
}

export default Navbar;
