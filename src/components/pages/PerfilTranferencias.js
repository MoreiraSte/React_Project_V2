import React,{useState,useEffect} from 'react';
import '../../perfil.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useHistory } from "react-router-dom";
import axios from "axios";



export default function TransfPage() {

    const[tipo, setTipo] = useState("");
    const[quantia,setQuantia] = useState();
    const[dataT,setDataT] = useState("");
    const[me,setMe] = useState("");
    const[pessoa,setPessoa] = useState("");

    const history = useHistory();


    function fazerTransferencia (e) {
        e.preventDefault();
    
        const data = {
         
            tipo_transferencia:tipo,
            valor_transferencia: quantia,
            data_transferencia: dataT,
            recebeu_transf: me,
            enviou_transf: pessoa
          
        };
  
        let USER_URL = "http://localhost:8000/setup_bank/transf/";
    
        axios({
          baseURL: USER_URL,
          method: "POST",
          data: data,
        
        })
          .then((res) => {
            
            if (res.status === 201) {
  
              
              history.push("/saldo");
              
             
            }
            setTimeout(() => {
              Notify.info('Transferência feita');
              history.push("/saldo");
              Notify.success('Saldo atualizado');
              Notify.info('Histórico de transferências atualizado');
            }, 3000);
          })
      }

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


useEffect(() => {
  fetch("http://localhost:8000/setup_bank/transf/")
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
            <div className='TransfPage'>
                <div className='containerTransf'>
                    <div className='formTransf'>
                        <p><b>Deseja fazer uma transferência?</b></p>

                        <p id='textTransf'>Tipo de transferência: P-Pix/B-Boleto</p>
                        <select value={tipo} onChange={(e)=>setTipo(e.target.value)}>
                            <option></option>
                            <option>P</option>
                            <option>B</option>
                        </select>


                        <div className='containerTinput'>
                        <div id='div'>
                        <p id='textTransf'>Quantia da transferência:</p>
                        <input value={quantia} onChange={(e)=>setQuantia(e.target.value)} type="text" id="transferencia" name="transferencia" placeholder='Quantia da transferência'/>
                        </div>
                        <div id='div'>
                        <p id='textTransf'>Data da transferência:</p>
                        <input value={dataT} onChange={(e)=>setDataT(e.target.value)} type="date" id="dataTransf" name="dataTransf" placeholder='Data da transferência'/>
                        </div>
                        </div>

                        <div className='containerTinput'>
                        <div id='div'>
                        <p id='textTransf'>Quem está enviando:</p>
                        <input value={me} onChange={(e)=>setMe(e.target.value)} type="text" id="enviouTransf" name="enviouTransf" placeholder='seu nome'/>
                        </div>
                        <div id='div'>
                        <p id='textTransf'>Quam vai receber:</p>
                        <input value={pessoa} onChange={(e)=>setPessoa(e.target.value)} type="text" id="reebeuTransf" name="reebeuTransf" placeholder='nome da pessoa'/>
                        </div>
                        </div>

                        <button onClick={fazerTransferencia}>Fazer transferência</button>

                    </div>
                    <div className='listaTransf'>
                        <p><b>Histórico de transferências</b></p>
                        {items.map(item => (
          
                        <h3 key={item.id}>
                         enviado:{item.valor_transferencia} para {item.recebeu_transf} em {item.data_transferencia}
                        </h3>
                        ))}
                    </div>
                    
                </div>
            </div>
        )
}
}