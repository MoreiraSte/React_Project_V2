import React, {useState,useEffect}from 'react';
import { slide as Menu } from 'react-burger-menu'
import './style.css'
import { Link, useHistory } from 'react-router-dom';


function Hamburger (){
  let user= JSON.parse(localStorage.getItem('client'))
  const history = useHistory();
  const [logado, setLogado] = useState(false);
  const [test, setTest] = useState(true);
  useEffect(() => {
    console.log(history)
    if(history == null){
      return
    }
    const unlisten = history.listen((location) => {
      console.log('new location: ', location)
      if(localStorage.getItem('client') == null){
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