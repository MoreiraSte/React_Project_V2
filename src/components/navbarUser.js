import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './navbarUser.css';
import Hamburger from './hamburgerMenu/Hamburger'
import { useHistory } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [logado, setLogado] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if(localStorage.getItem('client') == undefined){
      console.log('nao ta logado')
      setLogado(false)
    }
    else{
      console.log('ta logado')

      setLogado(true)
    }
    if(history == null){
      return
    }
    const unlisten = history.listen((location) => {
      console.log('new location: ', location)
      if(localStorage.getItem('client') == undefined){
        console.log('nao ta logado')
        setLogado(false)
      }
      else{
        console.log('ta logado')

        setLogado(true)
      }
    })
    return function cleanup() {
      unlisten()
    }
  }, [])


  const logout = () => {   
    localStorage.removeItem('client')
    Notify.warning('Você saiu da sua conta');
    history.push('/home')
  }

  return (
    <>
    {logado? (
      <><nav className='navbar'>
      <div className='navbar-container'>
        
      <h2 id='h2Text'>Bem-vindo</h2>
       
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/cadastroBanco' className='nav-links'>
              Sua conta
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/cartao'
              className='nav-links'
            
            >
              Pedir cartão
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/emprestimo'
              className='nav-links'
           
            >
              Emprestimo
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/saldo'
              className='nav-links'
            
            >
              Seu saldo
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/transferencia'
              className='nav-links'
            
            >
              Transferências
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
