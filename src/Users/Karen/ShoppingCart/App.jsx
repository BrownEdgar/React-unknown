import React from 'react'
import {useReducer} from "react"
import reducer from './reducer.js'
import {initialState} from './reducer.js'
import Show  from "./Show"
import "./App.scss"

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const deleteFunc = (id) => {
        dispatch({type: "delete", payload:id})
    }

   const totalFunc = () => {
    const total = state.shoppingCart.reduce((a, b) => a + b.price, 0);
    return total
   }

    return(
        <Show product={state.shoppingCart} deleteFunc={deleteFunc} totalFunc={totalFunc} />
    )
}