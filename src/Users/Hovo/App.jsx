import './App.css'

import React from 'react';

function App() {
  const [people, setPeople] = React.useState([
    { id: 1, name: 'Wes', year: 1988 },
    { id: 2, name: 'Kait', year: 1986 },
    { id: 3, name: 'Eleonor', year: 1970 },
    { id: 4, name: 'Lux', year: 2015 }
  ]);

  const [result, setResult] = React.useState('');

  const everyYear = () => {
    const fill = people.every(elem => new Date().getFullYear() - elem.year === 34);
    setResult(fill);
  };

  const someYear = () => {
    const result = people.some(elem => new Date().getFullYear() - elem.year > 19);
    setResult(result);
  };

  const yearEleonor = () => {
    const newYear = people.map(elem => elem.id === 3 ? { ...elem, year: 1986 } : elem);
    setPeople(newYear);
  };

  const updateSalary = () => {
    const updatedPeople = people.map(elem => {
      const random = Math.floor(Math.random() * 650001) + 150000
      return { ...elem, salary: random };
    });
    setPeople(updatedPeople);
  };

  const filteredSalary = () => {
    const filteredPeople = people.filter(elem => elem.salary > 500000);
    const filteredNames = filteredPeople.map(elem => elem.name);
    setResult(filteredNames);
    
  };

  const highSalary = () => {
    const high = people.reduce((acc, person) => {
      return acc.salary > person.salary ? acc : person;
    });
    setResult(high.name);
  }

  return (
    <>
      <ul className='first'>
        {people.map(elem => (
          <li key={elem.id}>
            Name: {elem.name}<br />
            Year: {elem.year}<br />
            {elem.salary && <span>Salary: {elem.salary}$<br /></span>}
          </li>
        ))}
      </ul>
      <div id="box">
        <button onClick={updateSalary}>Add Salary</button>
        <button onClick={everyYear}>Every 34 Years</button>
        <button onClick={someYear}>More Than 19</button>
        <button onClick={yearEleonor}>Change Year</button>
        <button onClick={filteredSalary} disabled={!people.some(elem => elem.salary)}>500.000 Up</button>
        <button onClick={highSalary} disabled={!people.some(elem => elem.salary)}>High Salary</button>
      </div>
      <>
        <h1>{result.toString()}</h1>
      </>
    </>
  );
}


export default App;