import React,{useState,useEffect} from 'react';

import '../../App.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export default function SignUp() {

  
  const [email,setEmail]= useState("");
  const [senha,setSenha] = useState("");
  const [operacao,setOperacao] = useState();
  const history = useHistory();
  
  useEffect(() => {
      if(localStorage.getItem('client')){
        history.push('/sign-up')
      }
  },[])
  
  async function loginSign (){  

      const data = {
        email:email,
        senha:senha,
        operacao:operacao
      }

      let result = await fetch("http://localhost:8000/setup_bank/client/",{
        method: "GET",
        body: data,
        
        
      }).then(res => res.json()).then(data => {
        console.log(data)
        
        if (localStorage.getItem("client") ==  undefined){
          setOperacao(data)
          // localStorage.setItem("client",JSON.stringify(data))
          console.log(data)
          Notify.success('Usuário logado');
          history.push("/cadastroBanco")
            
        }
        else{
          history.push('/sign-up')
          Notify.failure("Dados errados")

        }

      });
      console.log(result)
      
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

