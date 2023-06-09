import { useState, useEffect} from 'react'
import axios from 'axios';
import PropTypes from 'prop-types'
import {FiEdit2} from 'react-icons/fi'
import React, { Fragment } from 'react';
import './Todos.scss'

export default function Todos() {
    const [todos, setTodos] = useState([])
    const [elementId, setElementId] = useState(null)
   
    useEffect(() => {
         axios('https://jsonplaceholder.typicode.com/todos', {
            params:{_limit: 9}
        }).then(todos => setTodos(todos.data))
    }, [])

   
    const EditFuncTodos = (userId) => {
        setElementId(userId);
    };

    useEffect(() => {
        console.log(elementId);
    }, [elementId]);
    
    const handleSubmit = (e, id) => {
        EditFuncTodos(null)
        e.preventDefault()
        const {title, completed} =  e.target
        const user = todos.findIndex(elem => elem.id === id)

        const obj = {
            id,
            title: title.value || todos[user].title,
            completed: completed.value || todos[user].completed,
        }
        setTodos(todos.with(user, obj))
    }

    return (
        <div className='div_todos'>
          {
            todos.map(elem => {
              return (
                <React.Fragment key={elem.id}>
                  {elementId !== elem.id ? (
                    <ul key={elem.id} className='ul_todos'>
                      <span className='todo_i' onClick={() => EditFuncTodos(elem.id)}><FiEdit2/></span>
                      <h3>Id: {elem.id}</h3>
                      <span>Title: <li>{elem.title.slice(0, 20)}</li></span>
                      <span>Completed: <li>{elem.completed.toString()}</li></span>
                    </ul> 
                  ) : (
                    <form className='forms' onSubmit={(e) => handleSubmit(e, elem.id)} key={elem.id}>
                        <h5>Title : </h5>
                        <input type='text' placeholder={elem.title} id='title' />
                        <h5>Completed : </h5>
                        <input type='text' placeholder={elem.completed.toString()} id='completed' />
                        <input type="submit" value="Save"/>
                    </form>
                  )}
                </React.Fragment>
              );
            })
          }
        </div>
      );
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.exact({
            userId: PropTypes.number.isRequired,
            id:PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    )
};