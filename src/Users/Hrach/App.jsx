// import {useState, useEffect} from 'react'
// import './App.css'
// import React from 'react'

// function App() {
//   const [data,setData] = useState([])

//   const arr = [
//     {
//       id:1,
//       image:"https://images.unsplash.com/photo-1593575391244-2f16fcf4cbf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmljZSUyMGdpcmx8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
//       title:"BETTER CHEMISTRY",
//       description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque necessitatibus dolorem dicta perferendis assumenda facere"
//     },
//     {
//       id:2,
//       image:"https://images.ctfassets.net/ydv6sq0kb5bw/6rMw0ibUiaBOzUZloAC8ZZ/68b7bb79a840230f46a5dea4f74520ea/377324A2-EB9C-46BD-BBE0-A841EEDC867E.jpeg?fit=fill&q=75&fm=webp&f=face&w=1920&h=2688",
//       title: "BETTER PRACTICES",
// 			description: "Amet consectetur, adipisicing elit. Ab, magni. Nisi, maxime hic. Consequuntur vel architecto, minus non odit mollitia"
//     },
//     {
//       id:3,
//       image:"https://i.scdn.co/image/ab67616d0000b2730ccbd1aa2531478411a06d5d",
//       title: "INDUSTRY COLABORATION",
// 			description: "Inventore sit id unde magnam itaque nihil amet consectetur quas molestiae sequi provident possimus, hic error non quod, odit eaque"
//     }
//   ]

//   return(
//         <>
//           <div className='Product'>
// 			{
// 				arr.map(elem => {
// 					return <div key={elem.id}>
// 						<img className='fotoDiv' src={elem.image} alt="photo" />
// 						<div className='poqr'>
// 							<h1>{elem.title}</h1>
// 							<p>{elem.description}</p>
// 							<p>Read more</p>
// 						</div>
// 					</div>
// 				})
// 			}
// 		</div>
//         </>  
//   )
  
// }

// export default App



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [showItem, setShowItem] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axios('https://jsonplaceholder.typicode.com/todos')
      const data = response.data;
      setData(data);
    }
    getData();
  }, []);

  const handleDelete = (itemId) => {
    setShowItem(true);
    setDeleteItemId(itemId);
  };

  const itemDelete = () => {
    const updatedData = data.filter(item => item.id !== deleteItemId);
    setData(updatedData);
    setShowItem(false);
  };

  const cancel = () => {
    setShowItem(false);
  };

  return (
    <div className='big'>
      {
        data.map((elem) => {
          return (
            <div className='item' key={elem.id}>
              <h2>{elem.title}</h2>
              <p>{elem.body}</p>
              <button className='del' onClick={() => handleDelete(elem.id)}>Delete</button>
            </div>
          )
        })
      }
      {showItem && (
        <div className='modal'>
          <h1>Do you want to delete?</h1>
          <button className='btn btn_Yes' onClick={itemDelete}>Yes</button>
          <button className='btn btn_Close' onClick={cancel}>Close</button>
        </div>
      )}
    </div>
  )
}

export default App;