import { useState, useEffect } from 'react';
import data from './data.json';
import Nav from './Nav.jsx';

import './App.scss';

export default function App() {
  const [categories, setCategories] = useState([]);
  const [currentButtonID, setCurrentButtonID] = useState([]);
  const [product] = useState(data);

  useEffect(() => {
    const checkCategory = [...new Set(data.map((product) => product.category))];
    setCategories(checkCategory);
  }, []);

  const handleClick = (index) => {
    if (!currentButtonID.includes(index)) {
      setCurrentButtonID([...currentButtonID, index]);
    } else {
      setCurrentButtonID((prevValues) =>
        prevValues.filter((elem) => elem !== index)
      );
    }
  };

  const categoryCount = (category) => {
    return product.filter(item => item.category === category).length;
  };

  const productUpd = !currentButtonID.length 
    ? product
    : product.filter((product) =>
        currentButtonID.some(elem => categories[elem] === product.category)
      );

  return (
    <div className='App'>
       <Nav
        currentButtonID={currentButtonID}
        setCurrentButtonID={setCurrentButtonID}
        categories={categories}
        categoryCount={categoryCount}
        handleClick={handleClick}
      />
      <div className='product'>
        {productUpd.map(product => (
          <div key={product.id} className='items'>
            <img src={product.thumbnail} alt={product.title} />
            {product.title}
          </div>
        ))}
      </div>
    </div>
  );
}
