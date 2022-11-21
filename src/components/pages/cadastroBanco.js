import React, {useState}  from 'react';
import '../../perfil.css';

import '../../App.css';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';




export default function cadastroBanco() {
   
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [numConta,setNumConta]= useState("");
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [agencia,setAgencia]= useState("");
   
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [saldo,setSaldo]= useState("");
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();
  
   
  
    function RegisterCont(e) {
      e.preventDefault();
  
      const data = {
       
        numConta:numConta,
        agencia:agencia,
        saldo:saldo,
        
      };

    //   let result = fetch("http://localhost:8000/setup_bank/conta/",{
    //     method: "GET",
    // }).then(res=>res.json()).then(data => {
    //   console.log(data)
    // })
     

      
  
      let USER_URL = "http://localhost:8000/setup_bank/conta/";
  
      axios({
        baseURL: USER_URL,
        method: "POST",
        data: data,
        headers: { 'Authorization': 'Token ' + localStorage.getItem('token') }
      })
        .then((res) => {
          console.log('Token ' + localStorage.getItem('token'))
          if (res.status === 201) {

            
            history.push("/saldo");
            
           
          }
          setTimeout(() => {
            Notify.info('Conta criada');
            history.push("/saldo");
            Notify.success('Saldo atualizado');
            Notify.info('Usuário Premium gerado');
          }, 5000);
        })
    }
 
    return (
            <div className='cadastroBanco'>
                <div className='containerConta'>
                    <div className='imgConta'>
                    <img id='img_handshake' alt='imgHandshake' src='/images/img_contaPage.png'/>
                    </div>
                    <div className='formConta'>
                        <div className='formsCont'>
                            <h4>Sua Conta:</h4>

                            <form onSubmit={RegisterCont}>
                            <input type="text"  value={numConta} onChange={(e)=>setNumConta(e.target.value)} id="conta" name="conta" placeholder='Conta'/>
                            <br></br>
                            <input type="text"  value={agencia} onChange={(e)=>setAgencia(e.target.value)} id="agencia" name="agencia" placeholder='Agência'/>
                            <br></br>
                            <input type="text"  value={saldo} onChange={(e)=>setSaldo(e.target.value)} id="saldo" name="saldo" placeholder='Saldo'/> 
                            <br></br>

                            <button className='button' type='submit'>Registrar</button>
                            </form>

                            <p>*Será gerado se seu usuário vai ser free ou premium,<br></br>para que possa realizar emprestimos e<br></br>pedir cartão de crédito</p>
                        </div>
                    </div>
                </div>
            </div>
        )
}