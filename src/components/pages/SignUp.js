import React,{useState,useEffect} from 'react';

import '../../App.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from "axios";

export default function SignUp() {

  
  const [email,setEmail]= useState("");
  const [senha,setSenha] = useState("");
  const [nome,setNome] = useState("");
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
        nome:nome,
        operacao:'logar'
      }


      axios.post("http://localhost:8000/setup_bank/client/", data)
      .then((res) => {

        if (res.status === 200) {
          
          if (localStorage.getItem("client") ==  undefined){
            
            localStorage.setItem("client",JSON.stringify(res.data))
            Notify.success('Usuário logado');
            history.push("/cadastroBanco")
          }
        } 
        // else{
        //   Notify.failure("Dados errados")
        // }
        
      }).catch(res => {
          
        if(res.response.status === 500){
          
          Notify.failure("Dados errados")

        }
      })
      // let result = await fetch(,{
      //   method: "POST",
      //   headers: {
      //     'Content-Type': 'application/json'
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   body: JSON.stringify(data)
        
        
        
      // }).then(res => res.json()).then(data => {
      //   console.log("data")
       

      //   if (localStorage.getItem("client") ==  undefined){
          
      //     localStorage.setItem("client",JSON.stringify(data))
      //     console.log(data)
      //     Notify.success('Usuário logado');
      //     history.push("/cadastroBanco")
            
      //   }
      //   else{
      //     history.push('/sign-up')
      //     Notify.failure("Dados errados")

      //   }

      // });
      // console.log(result)
      
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

