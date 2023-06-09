import { Link, useNavigate } from 'react-router-dom'
import Cat from '../assets/Cat.png'
import ROUTES from '../routes/routes'


export default function ErrorPage() {
	const navigate = useNavigate()
	const goHome = () => {
		navigate({pathname: ROUTES.HOME, replace: false})
	}

	return (
		<div className='error'>
			<button onClick={goHome}>go home</button>
			<Link to={ROUTES.HOME}>go home</Link>
			<img src={Cat} alt="" />
			<h2>404 | page not found</h2>
		</div>
	)
}
