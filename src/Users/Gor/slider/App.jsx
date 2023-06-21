import { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import Cards from "./Cards";

import './App.css'
export default function App(){
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <Cards list={state.cards} />
        </div>
    )
}