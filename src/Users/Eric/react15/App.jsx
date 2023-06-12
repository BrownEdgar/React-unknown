import { Routes, Route, Link } from "react-router-dom";
import Todos from "./Todos";
import Posts from "./Posts";

export default function App(){
    return(
        <div>
            <ul>
                <li>
                    <Link to='/Todos'>Todos</Link>
                </li>
                <li>
                    <Link to='/Posts'>Posts</Link>
                </li>
            </ul>
            <Routes>
                <Route path='/Todos' element={<Todos/>} />
                <Route path='/Posts' element={<Posts/>} />
            </Routes>
        </div>
    )
}