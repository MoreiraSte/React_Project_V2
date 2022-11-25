import React, {useState,useEffect}from 'react';
import { slide as Menu } from 'react-burger-menu'
import './style.css'
import { Link, useHistory } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



function Hamburger (){
  // let user= JSON.parse(localStorage.getItem('client'))
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [logado, setLogado] = useState(false);
  const history = useHistory();

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
    Notify.warning('Você saiu da sua conta');
      history.push('/home')
    
     
  }

    return(
      <>
        {logado?(
          <><Menu right >
          <Link to='/cadastroBanco' className='menu-item'>
                Sua conta
              </Link>
              <Link
                to='/cartao'
                className='menu-item'
              >
                 Pedir cartão
              </Link>
              <Link
                to='/emprestimo'
                className='menu-item'
             
              >
                Emprestimo
              </Link>
              <Link
                to='/saldo'
                className='menu-item'
              
              >
                Seu saldo
              </Link>
              <Link
                to='/transferencia'
                className='menu-item'
              
              >
                Transferências
              </Link>
            
              <button onClick={logout}
                className='menu-item-button'>logout</button>
              {/* <Link
                onClick={logout}
                className='menu-item'
              
              >
                logout
              </Link> */}
        
      </Menu></>
        ):
          <><Menu right >
          <Link to='/home' className='menu-item'>
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
              
        
      </Menu></>
        }
      </>
        
    );
}

export default Hamburger