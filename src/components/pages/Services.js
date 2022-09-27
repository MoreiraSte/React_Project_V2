import React from 'react';
import '../../App.css';


export default function Services() {
  
  return(
    <div className='services'>
      <div className='cards'>
        <img className="card1" src='/images/card1.png' alt='card1'/>
        <img className="card2" src='/images/card2.png' alt='card2'/>
      </div>
      <div className='text'>
        <p>
             <img src="/images/card_icon.png" alt="card"/>Usando seu cartão de crédito e débito físico ou virtual,
             <br></br>
            você paga tudo e todos e ainda pode parcelar no crédito.
            <br></br>
            <br></br>
            <br></br>
            <img src="/images/card_icon.png" alt="card"/>Além disso, você ainda pode ganhar cashback, ou seja, dinheiro de volta. 
        </p>
        
      </div>

    </div>
  );
}
