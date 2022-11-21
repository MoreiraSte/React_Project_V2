import React,{useEffect,useState} from 'react';
import '../../perfil.css'
import {  useHistory } from 'react-router-dom';
import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';




export default function CartaoPage() {

 


  const[statusCartao,setStatusCartao] = useState("");
  const[contador,setContador] = useState(0);

  
  function solicitarCartao(e) {
    e.preventDefault();

    const data = {
      status_cartao:statusCartao
    };

      
      let USER_URL = "http://localhost:8000/setup_bank/cartao/";
      axios.post(USER_URL, data).then((res) => {
        console.log(res);
      });
  
      axios({
        baseURL: USER_URL,
        method: "POST",
        // data: data,
      }).then((res) => {
          if (res.status === 201) {
            Notify.success('Pedido aprovado');

            setContador(contador => contador+=1)
           
          
          }
          
        })
      }

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    
    
    
    useEffect(() => {
      fetch("http://localhost:8000/setup_bank/conta/")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
         
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div className='CartaoPage'>
            <div className='containerPageCard'>
                <div className='containerAdd'>
                    <div id='h6Div'>
                    <h6>Peça seu cartão de crédito!</h6>
                    </div>
                    <div className='TipoCard'>
                      <p id='textTipoCard'>Tipo do cartão: F:Fisico/D:Digital</p>
                      <select value={statusCartao} onChange={(e)=>setStatusCartao(e.target.value)}>
                      
                        <option></option>
                        <option>F</option>
                        <option>D</option>
                      </select>
                    </div>
                    <div id='buttonDiv'>
                    <button onClick={solicitarCartao}  className="button">Pedir</button>
                    
                    </div>

                    <div id='pDiv'>
                    <p>Número de cartões pedidos:</p>
                    <div className='contador'>
                      {contador}
                    </div>
                    </div>
                    
                </div>
            <div className='containerCard'>
                <div className='creditCard'>

                    <div id='creditCardId'>
                     <p id='texts'>Conta:</p>
                    {items.map(item => (
                   <h3 id='contaCard' key={item.id}>
                     {item.numConta}
                    </h3>
                    ))}
                    <p  id='texts'>Agência:</p>
                    {items.map(item => (
                   <h3 id='agenciaCard' key={item.id}>
                     {item.agencia}
                    </h3>
                    ))}
                    </div>
                    
                    <h3 id='textCard'>Credit Card</h3><p id='premCard'>Premium</p>
                    </div>
                    
                    </div>
                </div>

            </div>
          
        );
      }
    }
//     return (
//             <div className='CartaoPage'>
//                 <div className='containerPageCard'>
//                     <div className='containerAdd'>
//                         <div id='h6Div'>
//                         <h6>Peça seu cartão de crédito!</h6>
//                         </div>

//                         <div id='buttonDiv'>
//                         <button className="btn btn-white btn-animate">Pedir</button>
//                         </div>

//                         <div id='pDiv'>
//                         <p>Número de cartões pedidos:</p>
//                         <div className='contador'>

//                         </div>
//                         </div>
                        
//                     </div>
//                     <div className='containerCard'>
//                         <div className='creditCard'>
                            
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         );
// }