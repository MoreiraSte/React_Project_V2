import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';


export default function Register() {
  return(
    <div className='sign-up'>
    <div className='container'>
      <h4>Sign Up</h4>
      <div className='info'>
      <input type="text" id="name" name="Nome" placeholder='Nome'/>
      <br></br>
      <input type="number" id="age" name="Idade" placeholder='Idade'/>
      <br></br>
      <input type="text" id="phone" name="Celular" placeholder='Celular'/>
      <br></br>
      <input type="date" id="nasc" name="Nasc"/>
      <br></br>
      <div className='selection'>
        <div className='genero'>
            <p>Genero:</p>
            <select>
            <option>Feminino</option>
            <option>Masculino</option>
            </select>
        </div>
        <div className='tipoCliente'>
            <p>Plano:</p>
            <select>
            <option>Free</option>
            <option>Premium</option>
            </select>
        </div>
      </div>
     
      </div>
      
      <Link to='/' className='button' >
                Cadastrar
        </Link>
    
      <div className='link'>
      <Link to='/sign-up' className='signup' >
                Sign In
        </Link>
      </div>
    </div>
  </div>
  )
}
