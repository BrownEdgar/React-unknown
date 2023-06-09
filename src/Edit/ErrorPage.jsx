import ROUT from './route.js';
import {  useNavigate } from 'react-router-dom';
import './ErrorPage.scss'

export default function ErrorPage() {
    const navigate = useNavigate()
	const goHome = () => {
		navigate({pathname: ROUT.HOME})
	}
  return (
    <div className='error'>
      <h2>404 | page not found</h2>
      <button onClick={goHome} className='home_but'>Go home</button>
    </div>
  )
}