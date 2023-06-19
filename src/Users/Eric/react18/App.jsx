import { useReducer } from "react";
import reducer from "./reducer";

export default function App(){
    const [state, dispatch] = useReducer(reducer, [])
    return(
        <div></div>
    )
}