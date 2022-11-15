import React, {useState}  from 'react';
import '../../perfil.css';

import '../../App.css';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';



export default function cadastroBanco() {
   
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [numConta,setNumConta]= useState("");
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [agencia,setAgencia]= useState("");
   
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [saldo,setSaldo]= useState("");
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  
    function RegisterCont(e) {
      e.preventDefault();
  
      const data = {
       
        numConta:numConta,
        agencia:agencia,
        saldo:saldo,
        
      };
  
      let USER_URL = "http://localhost:8000/setup_bank/conta/";
      axios.post(USER_URL, data).then((res) => {
        console.log(res);
      });
  
      axios({
        baseURL: USER_URL,
        method: "POST",
        // data: data,
      })
        .then((res) => {
          if (res.status === 201) {
            history.push("/saldo");
            Toast.fire({
              icon: 'success',
              title: 'Signed in successfully'
            })
          }
          setTimeout(() => {
            history.push("/saldo");
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

                            <p>*Será gerado se seu usuário vai ser free ou premium,<br></br>para que possa realizar emprestimos</p>
                        </div>
                    </div>
                </div>
            </div>
        )
}