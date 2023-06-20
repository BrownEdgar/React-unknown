import { useState } from 'react';


export default function useRandom({ type, count, range,letterRange }) {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  
  const shuffle = () => {
    const shuf = [...data].sort(() => Math.random() - 0.5)
    setData(shuf);
  };

  const random = () => {
    const randomValues = [];
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const firstLetter = letters.indexOf(letterRange.first);
    const lastLetter = letters.indexOf(letterRange.last);
    
    for (let i = 0; i < count; i++) {
    let randomValue;
    if (type === 'number') {
    randomValue = Math.floor(Math.random() * (range.max - range.min + 1) + range.min);
    } else {
    randomValue = letters[Math.floor(Math.random() * (lastLetter - firstLetter + 1)) + firstLetter];
    }
    randomValues.push(randomValue);
    }
    setData(randomValues);
    }
  
  const sorted = () => {
    const sortValue = type === 'number' ? [...data].sort((a,b) => a - b) : [...data].sort((a, b) => a < b ? -1 : a > b ? 1 : 0)
    setData(sortValue)
  }

  const max = () => {
    if(data.length === 0) return
    const maxValue = type === 'number' ? Math.max(...data ) : [...data].reduce((a, b) => (a < b ? b : a));
    setData2([maxValue]);
  };
  
  const min = () => {
    if(data.length === 0) return
    const minValue = type === 'number' ? Math.min(...data) : [...data].reduce((a, b) => (a < b ? a : b));
    setData2([minValue]);
  };
  
  const reset = () => {
    setData([]);
    setData2([]);
  }
  return [data, data2, { shuffle, sorted, max, min, random, reset }];
}
