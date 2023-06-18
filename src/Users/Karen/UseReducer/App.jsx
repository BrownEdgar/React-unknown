import React from 'react';
import { useReducer, useEffect,useState } from 'react'
import reducer, { initialState } from './reducer';
import {  ADD_TODO, ADD_SHUFFLE, ADD_VALUE, ADD_IDENTIFIER, ADD_DELETTE} from './actionTypes';
import axios from 'axios';
import {AiFillDelete} from 'react-icons/ai'
import './App.scss'

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [inputValue, setInputValue] = useState('')

    // Jsonplaceholder -ից կստանա 10 հատ post և կպահի `posts` զանգվածի մեջ ,զուգահեռ նաև կնկարի Էջում
    const handleRequestFunc = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _limit: 10
          }
        }) .then((result) => {
            dispatch({ type: ADD_TODO, payload: result.data})
          });
      }

      // Խառնել arr զանգվածը(shuffle)
    const handleShuffle = () => {
        dispatch({type: ADD_SHUFFLE})
    }

    // Էջում պետք է ունենալ 1 input և այտեղ գրված անունը պետք է ավելացնել `developers` զանգվածի մեջ

    const handleSubmit = () => {
        dispatch({ type: ADD_VALUE, payload: inputValue })
        setInputValue('')
      }


      const handleChange = (e) => {
        setInputValue(e.target.value);
      }

      // առաջին գործողությունով ստացած 10 հատ post-ի id-ը ջնջել և փոխարենը դնել arr զանգվածի 10 թվերը։
      const handleChangeIndentifier = () => {
        const fill = state.posts.map((elem) => {
          return { ...elem, id: state.arr[elem.id - 1]};
        })
        dispatch({type: ADD_IDENTIFIER, payload: fill})
      };

      // ամեն մի post-ում լինի 'x' կոճակ և այն ՛click՛ի ժամանակ պիտի ջնջի հերթական post-ը,
      const handleDelete = (id) => {
        const fill = state.posts.filter(elem => elem.id !== id)   
        dispatch({type: ADD_DELETTE, payload: fill})
      }

    return (
        <div className='big_div'>
          <h1>State: {JSON.stringify(initialState)}</h1>
          {
            state.posts.map((elem) => (
              <div key={elem.id} className='post_div'>
                <span className='delete_icon' onClick={() => handleDelete(elem.id)}><AiFillDelete/></span>
                <span>Id: {elem.id}</span>
                <span>Title: {elem.title}</span>
                <span>Body: {elem.body}</span>
              </div>
            ))
          }
          <input type='text' value={inputValue} onChange={handleChange}/>
          <button onClick={handleRequestFunc}>Request</button>
          <button onClick={handleShuffle}>Shuffle</button>
          <button onClick={handleSubmit}>Add value</button>
          <button onClick={handleChangeIndentifier}>Сhange identifier</button>
        </div>
      );
    }
