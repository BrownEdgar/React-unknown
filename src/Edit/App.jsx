import Todos from './Todos'
import Posts from './Posts'
import Navbar from './Navbar'
import ErrorPage from './ErrorPage'
import HomePage from './HomePage'
import { Routes, Route} from 'react-router-dom'
import ROUT from './route.js';
import './App.scss'

export default function App() {
    return(
        <div>
			<Navbar />
			<Routes>
			<Route path={ROUT.HOME} element={<HomePage />}/>
				<Route path={ROUT.POSTS} element={<Posts />}/>
				<Route path={ROUT.TODOS} element={<Todos />}/>
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</div>
    )
}