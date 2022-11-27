import React from 'react';
import '../../perfil.css';


export default function TransfPage() {

 
    return (
            <div className='TransfPage'>
                <div className='containerTransf'>
                    <div className='formTransf'>
                        <p><b>Deseja fazer uma transferência?</b></p>

                        <p id='textTransf'>Tipo de transferência: P-Pix/B-Boleto</p>
                        <select>
                            <option></option>
                            <option>P</option>
                            <option>B</option>
                        </select>


                        <div className='containerTinput'>
                        <div>
                        <p id='textTransf'>Quantia da transferência:</p>
                        <input type="text" id="transferencia" name="transferencia" placeholder='Quantia da transferência'/>
                        </div>
                        <div>
                        <p id='textTransf'>Data da transferência:</p>
                        <input type="date" id="dataTransf" name="dataTransf" placeholder='Data da transferência'/>
                        </div>
                        </div>

                        <div className='containerTinput'>
                        <div>
                        <p id='textTransf'>Quem está enviando:</p>
                        <input type="text" id="enviouTransf" name="enviouTransf" placeholder='seu nome'/>
                        </div>
                        <div>
                        <p id='textTransf'>Quam vai receber:</p>
                        <input type="text" id="reebeuTransf" name="reebeuTransf" placeholder='nome da pessoa'/>
                        </div>
                        </div>

                        <button>Fazer transferência</button>

                    </div>
                    <div className='listaTransf'>
                        <p><b>Histórico de transferências</b></p>

                    </div>
                    
                </div>
            </div>
        )
}