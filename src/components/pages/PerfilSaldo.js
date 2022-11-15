import React,{useEffect,useState} from 'react';
import '../../perfil.css';
import axios from "axios";



export default function SaldoPage() {

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
        <div className='SaldoPage'>
        <div className='containerSaldo'>
        {items.map(item => (
          <h1 key={item.id}>
           R$ {item.saldo}
          </h1>
        ))}
      </div>
      </div>
    );
  }
}

   