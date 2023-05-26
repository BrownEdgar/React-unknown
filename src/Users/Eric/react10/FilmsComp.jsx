import { useContext } from 'react'
import './App.css'
// import { FilmsData } from './App'

export default function FilmsComp({ film, deleteFilm }){
    // const films1 = useContext(FilmsData)
    return(
        <tr>
            <td>{film.title}</td>
            <td>{film.genre}</td>
            <td>{film.stock}</td>
            <td>{film.rate}</td>
            <td>
                <button className='deleteButton' onClick={(film.id) = deleteFilm(film.id)}>Delete</button>
            </td>
        </tr>
    )
}