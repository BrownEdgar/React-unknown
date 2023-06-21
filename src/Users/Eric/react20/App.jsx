import useRandom from "./useRandom";


export default function App(){
    const [data, {shuffle, randomNum}] = useRandom({
        type: 'number',
        count: 10,
        range: {
          min: 100,
          max: 1540,
        }
      });
    return(
        <div>
            <button onClick={randomNum}>random</button>
            <button onClick={shuffle}>sort</button>
        </div>
    )
}
