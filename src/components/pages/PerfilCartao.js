import React,{useEffect,useState} from 'react';
import '../../perfil.css'



export default function CartaoPage() {

    function Pedido(){
        var modal = document.getElementById("myModal");

        var btn = document.getElementById("myBtn");

        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function() {
        modal.style.display = "block";
        }

        span.onclick = function() {
        modal.style.display = "none";
        }

        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
}
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

                    <div id='buttonDiv'>
                    <button className="btn btn-white btn-animate">Pedir</button>
                    </div>

                    <div id='pDiv'>
                    <p>Número de cartões pedidos:</p>
                    <div className='contador'>

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

                    <h3 id='textCard'>Credit Card</h3>
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