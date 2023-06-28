import React, { useState } from 'react';
import './App.css'
export default function App() {
  const [data, setData] = useState([
    { id: 1, image: '../public/img/alcohol3.jpg', price: 30.00, title: "Hennry" },
    { id: 2, image: '../public/img/alcohol2.jpg', price: 25.00, title: "Bacardi" },
    { id: 3, image: '../public/img/alcohol4.jpg', price: 15.00, title: "Miller" },
  ]);

  const deleteById = (id) => {
    setData(prevState => {
      return prevState.filter(item => item.id !== id);
    });
  };
  const total = () => {
    let totalPrice = 0;
    for (let i = 0; i < data.length; i++) {
      totalPrice += data[i].price;
    }
    return totalPrice.toFixed(2);
  };

  return (
    <div className="big-div">
        <header>
            <a href=""><i class="fa-solid fa-cart-shopping"></i> Add To Card</a>
        </header>
        <div className='item'>
          {data.map(item => (
            <div className='product' key={item.id}>
              <img src={item.image} alt="Image" />
              <div>
              <p><span>{item.title}</span></p>
              <p>{item.price}</p>
              </div>
              <a className='btn' onClick={() => deleteById(item.id)}><i class="fa-solid fa-circle-xmark"></i></a>
            </div>
          ))}
<p className='total'>Total: <span>{total()}$</span></p>

    </div>
    </div>
  );
}