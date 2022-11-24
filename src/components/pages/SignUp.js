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
      if(localStorage.getItem('client')){
        history.push('/sign-up')
      }
  },[])
  
  async function loginSign (){  

      let result = await fetch("http://localhost:8000/setup_bank/client/",{
        method: "GET",
        // body:JSON.stringify({ username: nome, password: senha }),
        // headers: { 'Content-Type': 'application/json' }
        
      }).then(res => res.json()).then(data => {
        console.log(data)
        // console.log(data.detail)
        if (localStorage.getItem("client") ==  undefined){
          Notify.success('Usuário logado');
          history.push("/cadastroBanco")
            
        }
        else{
          history.push('/sign-up')
          Notify.failure("Dados errados")
         
          
        }

      });
      console.log(result)
      // if (nome !== localStorage.getItem("token") || senha !== localStorage.getItem("token")){
      //   history.push('/sign-up')
      //   Notify.failure("Dados errados")
      // }
      // if (nome == localStorage.getItem("token") || senha == localStorage.getItem("token")){
      // result = await result.json();
      // localStorage.setItem("token", result.access)
      // Notify.success('Usuário logado');
      // history.push("/cadastroBanco")
      // }
    }


  return(

  <div className='sign-up'>
    <div className='container'>
      <h4>Sign In</h4>

      <div className='info'>
      <input type="text"   value={email} onChange={(e)=>setEmail(e.target.value)} id="nome" name="nome" placeholder='email'/>
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

