import { useNavigate } from 'react-router-dom'
import ROUTES from '../routes/routes'


export default function ErrorPage() {
	const navigate = useNavigate()
	const goHome = () => {
		navigate({pathname: ROUTES.HOME})
	}

	return (
		<div className='error'>
			<button onClick={goHome} className='goHome'>Home</button>
		</div>
	)
}
