import {useReducer} from 'react'
import {reducer}  from './reducer'
import {initialState}  from './reducer'
import ImagesComponent from './ImagesFail/ImagesComponent'
import './App.scss'

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <ImagesComponent image={state.images}  />
        </div>
    )
}