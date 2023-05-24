import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [showItem, setShowItem] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await axios('https://jsonplaceholder.typicode.com/todos')
      const data = response.data;
      setData(data);
    }
    getData();

    axios('https://jsonplaceholder.typicode.com/todos', {
      params: {
        _limit: 8,
      }
    })
      .then(res => setData(res.data))
  }, []);

  const handleDelete = (itemId) => {
    setShowItem(true);
    setDeleteItemId(itemId);
  };

  const handleItemDelete = () => {
    const updatedData = data.filter(item => item.id !== deleteItemId);
    setData(updatedData);
    setShowItem(false);
  };

  const handleCancel = () => {
    setShowItem(false);
  };

  return (
    <div className='big-item'>
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
        <div className='window-d'>
          <h2>Do you really want to delete?</h2>
          <button className='btn btn-Yes' onClick={handleItemDelete}>Yes</button>
          <button className='btn btn-Close' onClick={handleCancel}>Close</button>
        </div>
      )}
    </div>
  )
}

export default App;