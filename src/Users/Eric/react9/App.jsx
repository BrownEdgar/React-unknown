import axios from 'axios';
import { useEffect, useState } from 'react';
import Todos from './Todos';
import './App.css'
import Modal from './Modal';

export default function App(){
    const [itemId, setItemId] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos', {
    		params: {
			_limit: 10
			}
        })
        .then(res => setTodos(res.data))
    }, [])

    return(
        <>
        {
            isOpen && <Modal isOpen={[isOpen, setIsOpen]}></Modal>
        }
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>    
                    {todos.map(todo => {
                        return(
                            <Todos key={todo.id} id={todo.id} title={todo.title} isOpen={[isOpen, setIsOpen]}/>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}