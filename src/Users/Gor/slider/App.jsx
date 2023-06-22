import { useReducer } from "react";
<<<<<<< HEAD
import {reducer} from "./reducer";
import { initialState } from './reducer'
=======
import reducer, { initialState } from "./reducer";
import Cards from './Cards'

>>>>>>> fa176e0957c96ee73f645f377052f044d410f6f3
import './App.css'
export default function App(){
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <Cards list={state.cards} />
        </div>
    )
}