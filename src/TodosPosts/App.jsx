import axios from 'axios';
import Navbar from './components/Navbar'
import ROUTES from './routes/routes'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { TodosPage, HomePage, ErrorPage, PostsPage, } from './pages'
import './App.scss'

export default function App() {
	const [ data, setData ] = useState([]);
	const [ todos, setTodo ] = useState([]);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _limit: 9,
          }
        }).then(res => setData(res.data)),
        
		    axios('https://jsonplaceholder.typicode.com/todos', {
          params: {
            _limit: 15,
          }
        }).then(res => setTodo(res.data))
        
      },[])
	
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path={ROUTES.HOME} element={<HomePage />}/>
				<Route path={ROUTES.TODOS} element={<TodosPage todos={todos}/>}/>
				<Route path={ROUTES.POSTS} element={<PostsPage data={data}/>}/>
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</div>
	)
}
