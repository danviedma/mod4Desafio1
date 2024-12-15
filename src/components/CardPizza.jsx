import React from 'react';
import '../assets/css/CardPizza.css';

const CardPizza = (props) => {  
  return (
    <div className="card">
      <img src={props.img} alt={props.name} />
      <h2>Pizza {props.name}</h2>
      <div>
        <h3>Ingredientes:</h3>
        <p className='ingredientes'>🍕 {props.ingredients.join(", ")}</p>
      </div>
      <div className='price-container'>
        <p className='price'>Precio: $ {props.price}</p>
        <div className='price-button'>
          <button className='vermas'>Ver más</button>  
          <button className='anadir'>Añadir 🛒</button>
        </div>
      </div>
        
    </div>
  );
}

export default CardPizza;