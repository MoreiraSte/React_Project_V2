import React,{useState} from 'react';
import '../../App.css';
import { Link, useHistory } from 'react-router-dom';


export default function Register() {

  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail]= useState("");
  const [genero,setGenero]= useState();
  const [celular,setCelular]= useState("");
  const [cpf,setCpf]= useState("");
  const [data,setData]= useState();
  const [idade,setIdade]= useState();
  const [endereco,setEnd]= useState();

  const history = useHistory();

  const sigUp_register = () => {
    
    let item={name,password,email,genero,celular,cpf,data,idade,endereco}
    console.log.warn(item)

    let result= fetch("localhost:8000/client",{
      method:'POST',
      headers:{
        "Cotent-Type":'application/json',
        "Accept":'application/json'
      },
      body:JSON.stringify(item)
    });
    result = result.json()
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push("/add")
  }


  return(
    <div className='sign-upRes'>
    <div className='containerRes'>
      <h4>Sign Up</h4>
      <div className='info'>
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
      
      
      <div className='selectionEnd'>
        
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
      </div>

      <div className="file">
      <label for="myfile">Selecione uma imagem para usuário:</label>
      <br></br><input type="file" id="myfile" name="myfile"/>
      </div>
     
      </div>
      
      <Link to='/' className='button' onClick={sigUp_register} >
                Cadastrar
        </Link>
    
      <div className='link'>
        <div>
      <Link to='/sign-up' className='signup' >
                Sign In
        </Link>
        </div>
        <div>
      
        </div>
      </div>
    </div>
  </div>
  )
}
