import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  const [people,setPeople] = useState([
    { id: 1, name: 'Wes', year: 1988 },
    { id: 2, name: 'Kait', year: 1986 },
    { id: 3, name: 'Eleonor', year: 1970 },
    { id: 4, name: 'Lux', year: 2015 }
  ]);

  const [result, setResult] = React.useState('')
//1
  const yearErchors = () =>{
    const erchors = people.every(e => new Date() - e.year === 34)
    setResult(erchors)
  }
//2
const nineTeen = () =>{
  const ayo = people.some(e => new Date() - e.year > 19)
  setResult(ayo)
}
//3
const eleonor = () => {
  const newYearEl = people.map(e => e.id === 3 ? { ...e, year: 1986 } : e)
  setPeople(newYearEl)
}
//4

  return (
    <>
    <ul>
        {people.map(e => (
          <li key={e.id}>
            Name: {e.name}<br/>
            Year: {e.year}<br/>
          </li>
        ))}
      </ul>
     <div>
      <button onClick={yearErchors}>ardyoq 34?</button>
      <button onClick={nineTeen}>mec 19</button>
      <button onClick={eleonor}>newYear</button>
      {/* <button onClick={filterSel}>qqq</button> */}

     </div>
     <h1>{JSON.stringify(result)}</h1>
    </>
  )
}

export default App
