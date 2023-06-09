import Navbar from './components/Navbar/Navbar'
import ROUTES from './routes/routes'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate} from 'react-router-dom'
import { BlogPage, HomePage, ErrorPage, ContactPage, AboutPage } from './pages'

import './App.css'
import Layouts from './pages/Layouts'
import { todoLoader } from './pages/About'

export default function App() {

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path={ROUTES.HOME} element={<Layouts />}>
				<Route index element={<HomePage/>} />
				<Route path={ROUTES.BLOG} element={<BlogPage />} />
				<Route path={ROUTES.ABOUT} element={<AboutPage />} loader={todoLoader} />
				<Route path={ROUTES.CONTACT} element={<Navigate to={ROUTES.HOME} replace/> } />
				<Route path='*' element={<ErrorPage />} />
			</Route>
		)
	)

	return (
		<div>
			<RouterProvider router={router}/>
		</div>
	)
}
