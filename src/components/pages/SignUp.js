import React,{useState,useEffect} from 'react';

import '../../App.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export default function SignUp() {

  
  const [email,setEmail]= useState("");
  const [senha,setSenha] = useState("");
  const history = useHistory();
  
  useEffect(() => {
      if(localStorage.getItem('users')){
        history.push('/sign-up')
      }
  },[])
  
  async function loginSign (){  

      let result = await fetch("http://localhost:8000/auth/jwt/create/",{
        method: "POST",
        body:JSON.stringify({ username: email, password: senha }),
        headers: { 'Content-Type': 'application/json' }
        
      });

      // result = await result.json();
      // localStorage.setItem("token", result.access)
      // Notify.success('Usuário logado');
      // history.push("/cadastroBanco")
    }

  return(

  <div className='sign-up'>
    <div className='container'>
      <h4>Sign In</h4>

      <div className='info'>
      <input type="text"   value={email} onChange={(e)=>setEmail(e.target.value)} id="email" name="email" placeholder='email'/>
      <br></br>
      <input type="password"  value={senha} onChange={(e)=>setSenha(e.target.value)} id="senha" name="senha" placeholder='senha'/>
      </div>
      
      <button className='button' onClick={loginSign} >Submit</button>
    
      <div className='link'>
      <Link to='/register' className='signup' >
                Sign Up
        </Link>
      </div>
    </div>
  </div>
  )
}

