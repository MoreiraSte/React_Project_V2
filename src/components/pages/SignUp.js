import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';


export default function SignUp() {
  return(

  <div className='sign-up'>
    <div className='container'>
      <h4>Sign In</h4>
      <div className='info'>
      <input type="text" id="cliente" name="cliente" placeholder='cliente'/>
      <br></br>
      <input type="text" id="senha" name="senha" placeholder='senha'/>
      </div>
      <div className='button'>

      </div>
      <Link to='/' className='signup' >
                Sign Up
        </Link>
    </div>
  </div>
  )
}
