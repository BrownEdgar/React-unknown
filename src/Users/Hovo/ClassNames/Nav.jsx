import React from 'react';
import classNames from 'classnames';
import data from './data.json';


 export default function Nav({ currentButtonID, setCurrentButtonID, categories, categoryCount, handleClick }) {

return (
  <nav>
      <button
        className={classNames('btn', {
        active: !currentButtonID.length
      })}
        onClick={() => setCurrentButtonID([])}
      >
       All
      {' '}
      ({data.length})
      </button>
        {categories.map((category, index) => (
      <button
        key={index}
        className={classNames('btn', {
        active: currentButtonID.includes(index),
      })}
        onClick={() => handleClick(index)}
      >
        {category} 
          {' '}
        ({categoryCount(category)})
        </button>
      ))}
  </nav>
)};
    