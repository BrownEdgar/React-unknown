import data from './data'
import './App.css'
import { useContext, useState } from 'react'
import FilmsComp from './FilmsComp'

//export const FilmsData = React.createContext(null)

export default function App(){
    const [films, setFilms] = useState(data)
    function deleteFilm(id){
        // const newList = films.filter(film => film.id !== id)
        // setFilms(newList)


        // setFilms(...films.filter(film => film.id !== id))
        console.log(id);
    }
    function sort(e){
        if(e.target.value == 'rate'){
            setFilms([...films.sort((a,b) => a.rate - b.rate)])
        }else if(e.target.value == 'stock'){
            setFilms([...films.sort((a,b) => a.stock - b.stock)])
        }else if(e.target.value == 'reset'){
            setFilms([...films.sort((a,b) => a.id - b.id)])
        }
    }
    return(
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th>sort by
                        <select onChange={(e) =>sort(e)}>
                            <option value='rate'>rate</option>
                            <option value='stock'>stock</option>
                            <option value='reset'>reset</option>
                        </select>
                    </th>
                </tr>
            </thead>
            <tbody>
                {films.map(film => {
                    return (
                        // <FilmsData.Provider value={films}>
                            <FilmsComp key={film.id} film={film} deleteFilm={deleteFilm}/>
                        // </FilmsData.Provider>
                    )
                })}
            </tbody>
        </table>
    )
}