import React,{useState,useEffect} from 'react';
import '../../App.css';
import { Link, useHistory } from 'react-router-dom';


export default function SignUp() {

  
  // const [email,setEmail]= useState("");
  // const [password,setPassword] = useState("");
  // const history = useHistory();
  // useEffect(() => {
  //     if(localStorage.getItem('user-info')){
  //       history.push('/add')
  //     }
  // },[])

  // const loginSign = () => {   
  //   console.log.warn(email,password)
  //   let item = {email,password}
  //   let result= fetch("localhost:8000/user",{
  //     method:'POST',
  //     body:JSON.stringify(item),
  //     headers:{
  //       "Cotent-Type":'application/json',
  //       "Accept":'application/json'
  //     }
  //   })
  //   result = result.json()
  //   localStorage.setItem("user-info",JSON.stringify(result))
  //   history.push("/add")
  // }

  return(

  <div className='sign-up'>
    <div className='container'>
      <h4>Sign In</h4>
      <div className='info'>
      <input type="text"  id="email" name="email" placeholder='email'/>
      {/* value={email} onChange={(e)=>setEmail(e.target.value)} */}
      <br></br>
      <input type="text"  id="senha" name="senha" placeholder='senha'/>
      {/* value={password} onChange={(e)=>setPassword(e.target.value)} */}
      </div>
      
      <Link to='/' className='button'  > 
      {/* onClick={loginSign} */}
                Logar
        </Link>
    
      <div className='link'>
      <Link to='/register' className='signup' >
                Sign Up
        </Link>
      </div>
    </div>
  </div>
  )
}
