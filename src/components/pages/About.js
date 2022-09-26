import React from 'react';
import '../../App.css';

export default function About() {

 
  return (
      <div className='about'>
          <div className='information'>
            <p><img src="/images/cards_icon.png" alt="icon"/>Funções simples e rápidas</p>
            <br></br>
            <p><img src="/images/cards_icon.png" alt="icon"/>Segurança </p>
            <br></br>
            <p><img src="/images/cards_icon.png" alt="icon"/>Cartões a app acessíveis</p>
            <br></br>
            <p><img src="/images/cards_icon.png" alt="icon"/>No casibank você controla tudo o que entra e<br></br> o que sai na hora, de forma fácil e direto do celular</p>
           <br></br>
            <p><img src="/images/cards_icon.png" alt="icon"/>Além de fazer seu dinheiro render, você pode usá-lo<br></br> na hora que quiser para pagamentos, transferências e saques</p>
            <br></br>
            <p><img src="/images/cards_icon.png" alt="icon"/>Aproveite o Pix com a conta digital e cartão de <br></br>crédito sem anuidade do CasiBank</p>
          </div>
          <div className='img_about'>
             <img className='imgAbout' src='/images/about_page.png' alt='img_about'/>
          </div>
      </div>
  );
}

