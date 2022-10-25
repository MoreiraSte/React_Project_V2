import React,{useState} from 'react';
import '../../App.css';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';



export default function Register() {

  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail]= useState("");
  const [genero,setGenero]= useState("");
  const [celular,setCelular]= useState("");
  const [cpf,setCpf]= useState("");
  const [data,setData]= useState("");
  const [idade,setIdade]= useState("");
  const [endereco,setEnd]= useState("");

  const history = useHistory();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  function handleRegister(e) {
    e.preventDefault();

    const data = {
      name:name,
      password:password,
      email: email,
    };

    let USER_URL = "https://localhost:8000/client";
    axios({
      baseURL: USER_URL,
      method: "POST",
      data: data,
    })
      .then((res) => {
        if (res.status === 201) {
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
        }
        setTimeout(() => {
          history.push("/login/");
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
        let error_msg = "";
        Object.keys(error.response.data).forEach(function (e) {
          error_msg += e + ": " + error.response.data[e][0] + " - ";
        });
        Toast.fire({
          icon: 'error',
          title: 'Error to sign up'
        })
      });
    }


  return(
    <div className='sign-upRes'>
    <div className='containerRes'>
      <h4>Sign Up</h4>
      <div className='info'>
      <form onSubmit={handleRegister}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} id="name" name="Nome" placeholder='Nome'/>
        <br></br>
        <input type="number" value={idade} onChange={(e)=>setIdade(e.target.value)} id="age" name="Idade" placeholder='Idade'/> 
        <br></br>
        <input type="date" value={data} onChange={(e)=>setData(e.target.value)} id="nasc" name="Nasc"/>
        <br></br>
        <input type="text" value={celular} onChange={(e)=>setCelular(e.target.value)} id="phone" name="Celular" placeholder='Celular'/>
        <br></br>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" name="Email" placeholder='E-mail'/>
        <br></br>
        <input type="text" value={cpf} onChange={(e)=>setCpf(e.target.value)} id="cpf" name="Cpf" placeholder='CPF'/>
        <br></br>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="senha" name="Senha" placeholder='Senha'/>
        <br></br>
        <div className='endereco'>
          <p id='endText'>Gênero:</p>
              <select id='selectGen' value={genero} onChange={(e)=>setGenero(e.target.value)}>
              <option>Feminino</option>
              <option>Masculino</option>
              </select>
          </div>
          <div className='endereco'>
          <p id='endText'>Endereço:</p>
              <select id='selectGen' value={endereco} onChange={(e)=>setEnd(e.target.value)}>
              <option>SP</option>
              <option>AC</option>
              <option>AL</option>
              <option>AP</option>
              <option>AM</option>
              <option>BA</option>
              <option>CE</option>
              <option>ES</option>
              <option>GO</option>
              <option>MA</option>
              <option>MT</option>
              <option>MS</option>
              <option>MG</option>
              <option>PA</option>
              <option>PB</option>
              <option>PR</option>
              <option>PE</option>
              <option>PI</option>
              <option>RJ</option>
              <option>RN</option>
              <option>RS</option>
              <option>RO</option>
              <option>RR</option>
              <option>SC</option>
              <option>SE</option>
              <option>TO</option>
              <option>DF</option>
              </select>
          </div>

          {/* <div className="file">
        <label for="myfile">Selecione uma imagem para usuário:</label>
        <br></br><input type="file" id="myfile" name="myfile"/>
        </div> */}

        <button className='button' type='submit'>Cadastrar</button>

        <div className='link'>
          
          <Link to='/sign-up' className='signup' >
                    Sign In
            </Link>
            </div>
            
      </form>
      
        </div>
      
      </div>  
      
    </div>
  
  )
}
