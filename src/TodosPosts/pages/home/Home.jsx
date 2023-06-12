import Posts from '../../../assets/Posts.avif'
import Todos from '../../../assets/Todos.png'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../../routes/routes'
import './Home.scss'


export default function Home() {
    const navigate = useNavigate()

	const toPosts = () => {
		navigate({pathname: ROUTES.POSTS})
	}

    const toTodos = () => {
		navigate({pathname: ROUTES.TODOS})
	}

	return (
		
		<div className="home">
            <div >
                <img src={Todos} alt="" onClick={toTodos}/>
            </div>
            <div >
                <img src={Posts} alt="" onClick={toPosts}/>
            </div>
		</div>
	)
}