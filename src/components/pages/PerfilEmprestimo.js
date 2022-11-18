import React from 'react';
import '../../perfil.css';


export default function EmprestPage() {

 
    return (
            <div className='EmprestPage'>
                <div className='containerEmprestimo'>
                    <div className='formEmprest'>
                       
                            <h3>De quanto será o emprestimo?</h3>
                            <input type="text" id="emprest" name="emprest" placeholder='Quantia'/>
                        
                        
                            <button>Pedir</button>
                        
                    </div>
                </div>
            </div>
        )
}