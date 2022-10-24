import React,{useState} from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';


export default function Register() {

  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail]= useState("")
  const [genero,setGenero]= useState("")
  const [celular,setCelular]= useState("")
  const [cpf,setCpf]= useState("")
  const [data,setData]= useState("")
  const [idade,setIdade]= useState("")


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
      
      <p id='endText'>Endereço:</p>
      <div className='selectionEnd'>
        
        <div className='endereco'>
          
          <input type="text" id="cidade" name="cidade" placeholder='Cidade'/>
          <input type="text" id="bairro" name="bairro" placeholder='Bairro'/>
        </div>
        <div className='endereco2'>
          <input type="text" id="uf" name="uf" placeholder='UF'/>
          <input type="number" id="num" name="num" placeholder='Número'/>

        </div>
        <div className='endereco3'>
          <input type="number" id="rua" name="rua" placeholder='Rua'/>
          <input type="text" id="cep" name="cep" placeholder='CEP'/>

        </div>

        <div className='genero'>
            <select id='selectGen' value={genero} onChange={(e)=>setGenero(e.target.value)}>
            <option>Feminino</option>
            <option>Masculino</option>
            </select>
        </div>
      </div>

      <div className="file">
      <label for="myfile">Selecione uma imagem para usuário:</label>
      <br></br><input type="file" id="myfile" name="myfile"/>
      </div>
     
      </div>
      
      <Link to='/' className='button' >
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
