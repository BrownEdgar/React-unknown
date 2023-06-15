import { useReducer, useState } from 'react'

import './App.css'
import reducer from './reducer'
import { ADD_ELEMENT, SHUFFLE } from './actionType';


function App() {
         const initialState = {
        actions: 0,
        developers: [],
        posts: [],
        arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
      }
    const [state, dispatch] = useReducer(reducer, initialState);
    const hendleClick = () =>{
        dispatch({type: ADD_ELEMENT, payload: textName.value })
    }
    const hendleShuffle = () =>{
        dispatch({type: SHUFFLE})
      }

  return (
    <>
      <div>
        <h1>State:{JSON.stringify(state)}</h1>
        <input type="text" name='textName' id='textName'/>
        <button onClick={hendleClick}>BTN</button>
        <button onClick={hendleShuffle}>Shuffle</button>
      </div>

    </>
  )
}

export default App