import Todos from './Todos'
import Posts from './Posts'
import './App.scss'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function App() {
    const [todos, setTodos] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts', {
            params:{_limit: 10}
        }).then(posts => setPosts(posts.data))
        axios('https://jsonplaceholder.typicode.com/todos', {
            params:{_limit: 10}
        }).then(todos => setTodos(todos.data))
    })
    return(
        <div>
            <Todos todos={todos}/>
            <Posts posts={posts}/>
        </div>
    )
}