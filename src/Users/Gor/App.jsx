import { useState } from 'react'

import './App.css'

function App() {
  const [people,setPeople] = useState([
    { id: 1, name: 'Wes', year: 1988 },
    { id: 2, name: 'Kait', year: 1986 },
    { id: 3, name: 'Eleonor', year: 1970 },
    { id: 4, name: 'Lux', year: 2015}
  ])
  const [result,setResult] = useState('')
  function randomPay() {
    const addPay = people.map(elem =>{
      return {...elem, pay :Math.floor(Math.random()* (800000 - 150000) + 150000)}
    })
    setPeople(addPay)
  }
  function getYear(){
    const gYear = people.filter(e => 2023 - e.year == 34)
		setResult(gYear)
  }
  function Year19(){
    const year19 = people.every(e => 2023 - e.year > 19)
		setResult(year19)
  }
  function changeYear(){
    const change = people.map(e => {
      if (e.id === 3) {
        return { ...e, year: 1986 };
      }
      return e;
  
  })
  setPeople(change)
  }
  function money(){
    const many = people.filter(e => e.pay > 500000 && e.name )
		setResult(many)
  }
  return (
    <div>
      <h1>{JSON.stringify(people)}</h1>
      <p>{JSON.stringify(result)}</p>
      <button onClick={randomPay}>Random Pay</button>
      <button onClick={getYear}>Year 34</button>
      <button onClick={Year19}> Year 19</button>
      <button onClick={changeYear}>change Year</button>
      <button onClick={money}>Money</button>
    </div>
  )
}

export default App
