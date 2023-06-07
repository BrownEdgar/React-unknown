import Navbar from './components/Navbar/Navbar'
import ROUTES from './routes/routes'
import { Routes, Route } from 'react-router-dom'
import { BlogPage, HomePage, ErrorPage, ContactPage, AboutPage } from './pages'

import './App.css'

export default function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path={ROUTES.HOME} element={<HomePage />}/>
				<Route path={ROUTES.BLOG} element={<BlogPage />}/>
				<Route path={ROUTES.ABOUT} element={<AboutPage />}/>
				<Route path={ROUTES.CONTACT} element={<ContactPage />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>

		</div>
	)
}
