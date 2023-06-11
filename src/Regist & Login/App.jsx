import Register from  './Register/Register'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import ROUTES from './route/route'
import Layouts from './Layouts'
import Login from './Login/Login'


import './App.scss'

export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={ROUTES.HOME} element={<Layouts/>}>
                <Route index element={<Layouts/>} />
                <Route path={ROUTES.REGISTER} element={<Register/>}/>
                <Route path={ROUTES.LOGIN} element={<Login/>}/>
                {/* <Route path='*' element={<ErrorPage/>}/> */}
            </Route>
        )
    )
    return(
        <>
            <RouterProvider router={router}/>
        </>
    )
}