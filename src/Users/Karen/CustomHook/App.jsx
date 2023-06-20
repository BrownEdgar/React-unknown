import useRandom from './useRandom'
import './App.scss'

export default function App() {
    const [data,dataNew,{shuffle, sorted, max, min},] = useRandom({
        type: 'number',
        count: 10,
        range: {
            min: 100,
            max: 1540
        }
    })
    console.log(dataNew)
    return(
        <div>
            <h1>data : {JSON.stringify(data)}</h1>
            <h1>Min/Max : {dataNew}</h1>
            <button onClick={shuffle}>Shuffle</button>
            <button onClick={sorted}>Sorted</button>
            <button onClick={max}>Max</button>
            <button onClick={min}>Min</button>
        </div>
    )
}