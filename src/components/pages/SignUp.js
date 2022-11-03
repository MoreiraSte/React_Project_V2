import React,{useState,useEffect} from 'react';
import '../../App.css';
import { Link, useHistory } from 'react-router-dom';


export default function SignUp() {

  
  const [email,setEmail]= useState("");
  const [password,setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
      if(localStorage.getItem('user-info')){
        history.push('/add')
      }
  },[])

  const loginSign = () => {   
    console.log.warn(email,password)
    let item = {email,password}
    let result= fetch("localhost:8000/user",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Cotent-Type":'application/json',
        "Accept":'application/json'
      }
    })
    result = result.json()
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push("/add")
  }

  return(

  <div className='sign-up'>
    <div className='container'>
      <h4>Sign In</h4>
      <div className='info'>
      <input type="text"   value={email} onChange={(e)=>setEmail(e.target.value)} id="email" name="email" placeholder='email'/>
     
      <br></br>
      <input type="text"  value={password} onChange={(e)=>setPassword(e.target.value)} id="senha" name="senha" placeholder='senha'/>
      
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
