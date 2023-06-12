import Register from './Register/Register'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate} from 'react-router-dom'
import ROUTES from './route/route'
import Layouts from './Layouts'
import Login from './Login/Login'
import HomePage from './HomePage'
import { useState, useEffect } from 'react'
// import   { broadcast } from './Login/Login'


import './App.scss'

export default function App() {
	const [users, setUsers] = useState([])


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<HomePage />} />
				<Route path={ROUTES.REGISTER} element={<Register setUsers={setUsers}/>} />
				<Route path={ROUTES.LOGIN} element={<Login users={users}/>} />
        {/* <Route path='*' element={<ErrorPage/>}/> */}
      </Route>
    )
  )

  return (
    <>
        <RouterProvider router={router}></RouterProvider>  
    </>
    
  )
}