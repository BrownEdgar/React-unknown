import { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import { initialState } from "./reducer";
import './App.css'
export default function App(){
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <Cards list={state.Cards} />
        </div>
    )
}