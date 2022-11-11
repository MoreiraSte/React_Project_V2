import React from 'react';
import '../../perfil.css'



export default function CartaoPage() {

 
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
                            
                        </div>
                    </div>
                </div>

            </div>
        );
}