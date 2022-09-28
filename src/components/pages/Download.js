import React from 'react';
import '../../App.css';


export default function Download() {
    return(
        <div className='download'>
            <div className='textStore'>
            <div className='textDown'>
                <p>
                   <img alt="coinColor" src="/images/coinColors.png" /> É rápido, fácil e você ainda ganha dinheiro de volta
                    <br></br>
                    <img alt="coinColor" src="/images/coinColors.png" />Pague seus boletos em até 12x
                    <br></br>
                    <img alt="coinColor" src="/images/coinColors.png" /> Acompanhe seu dinheiro render muito mais do que na poupança
                    <br></br>
                    <img alt="coinColor" src="/images/coinColors.png" />Peça seu CasiBank Card, seu cartão sem anuidade
                </p>
            </div>
           
            <div className='store'>
                <img alt='play' src='/images/seloStore.png'/>
                <img alt='apple' src='/images/seloApple.png'/>
                
           
            
            </div>

            </div>

            <div className='imgMobile'>
                <img className='imgHand' src='/images/hand_mobile.png' alt='hand'/>
            </div>
         
        </div>
    );
}