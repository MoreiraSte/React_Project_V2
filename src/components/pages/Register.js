import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';


export default function Register() {
  return(
    <div className='sign-up'>
    <div className='containerRes'>
      <h4>Sign Up</h4>
      <div className='info'>
      <input type="text" id="name" name="Nome" placeholder='Nome'/>
      <br></br>
      <input type="number" id="age" name="Idade" placeholder='Idade'/>
      <br></br>
      <input type="date" id="nasc" name="Nasc"/>
      <br></br>
      <input type="text" id="phone" name="Celular" placeholder='Celular'/>
      <br></br>
      <input type="email" id="email" name="Email" placeholder='E-mail'/>
      <br></br>
      <input type="text" id="cpf" name="Cpf" placeholder='CPF'/>
      <br></br>
      <input type="password" id="senha" name="Senha" placeholder='Senha'/>
      <br></br>
      <input type="password2" id="senha2" name="Senha2" placeholder='Repita a senha'/>
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
        <div>
      <Link to='/sign-up' className='signup' >
                Sign In
        </Link>
        </div>
        <div>
      <Link to='/' className='signup' >
                Forget the password? Click here 
        </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
