import React,{useState} from 'react';
import axios from 'axios';
import '../../App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

export default function SignUp() {

  const navigate = useNavigate();
  const [email,setEmail]= useState("");
  const [senha,setSenha] = useState("");
  // const history = useHistory();
  // useEffect(() => {
  //     if(localStorage.getItem('user-info')){
  //       history.push('/add')
  //     }
  // },[])

  const loginSign = () => {   
    let USER_URL = "http://localhost:8000/setup_bank/user/";
    axios.post(USER_URL, {email, senha}).then((res) => {
      console.log(res);
    });

    axios({
      baseURL: USER_URL,
      method: "GET",
      
    })
      .then((res) => {
        if (email === res.email && senha === res.senha) {
          navigate(`/`)
        }
        else {
          navigate(`/sign-up`)
        }
      
      })
    }
  

  return(

  <div className='sign-up'>
    <div className='container'>
      <h4>Sign In</h4>

      <div className='info'>
      <input type="text"   value={email} onChange={(e)=>setEmail(e.target.value)} id="email" name="email" placeholder='email'/>
      <br></br>
      <input type="text"  value={senha} onChange={(e)=>setSenha(e.target.value)} id="senha" name="senha" placeholder='senha'/>
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

