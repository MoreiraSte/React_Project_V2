import React,{useState} from 'react';
import '../../perfil.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from "axios";
import { useHistory } from "react-router-dom";



export default function EmprestPage() {

    const[quantia,setQuantia] = useState()
    const history = useHistory();


    function pedirEmprestimo(e) {
        e.preventDefault();
    
        const data = {
            valor_solicitado:quantia
        };
    
          
          let USER_URL = "http://localhost:8000/setup_bank/empr/";
          axios.post(USER_URL, data).then((res) => {
            console.log(res);
          });
      
          axios({
            baseURL: USER_URL,
            method: "POST",
            data: data,
            headers: { 'Authorization': 'Token ' + localStorage.getItem('token') }
          }).then((res) => {
              if (res.status === 201) {

                Notify.success('Emprestimo aprovado');

                history.push("/saldo")
                Notify.info('Saldo atualizado');
                
              }
              
            })
          }

 
    return (
            <div className='EmprestPage'>
                <div className='containerEmprestimo'>
                    <div className='formEmprest'>
                       
                            <h3>De quanto será o emprestimo?</h3>
                            <input value={quantia} onChange={(e)=>setQuantia(e.target.value)} type="text" id="emprest" name="emprest" placeholder='Quantia'/>
                        
                        
                            <button onClick={pedirEmprestimo}>Pedir</button>
                        
                    </div>
                </div>
            </div>
        )
}