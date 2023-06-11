import Navbar from './components/Navbar/Navbar'
import ROUTES from './routes/routes'
import { Routes, Route } from 'react-router-dom'
import { RegPage, HomePage, ErrorPage, LoginPage} from './pages'

import './App.css'

export default function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path={ROUTES.HOME} element={<HomePage />}/>
				<Route path={ROUTES.REG} element={<RegPage />}/>
				<Route path={ROUTES.LOGIN} element={<LoginPage />}/>
				<Route path='*' element={<ErrorPage />} />
			</Routes>

		</div>
	)
}
