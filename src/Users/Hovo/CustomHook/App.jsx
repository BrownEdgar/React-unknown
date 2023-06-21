import useRandom from './useRandom';
import './App.scss'

export default function App() {
  const [data, data2, { shuffle, sorted, max, min, random,reset }] = useRandom({
    type: 'number',
    count: 10,
    range: {
      min: 100,
      max: 1540,
    },
    letterRange:{
      first:'d',
      last:'p'
    }
  });

  return (
    <div>
      <button onClick={random}>Random</button>
      <button onClick={shuffle}>Shuffle</button>
      <button onClick={sorted}>Sort</button>
      <button onClick={max}>Max</button>
      <button onClick={min}>Min</button>
      <button onClick={reset}>Reset</button>
      <div>Data: {JSON.stringify(data)}
      <p>Data_2: {JSON.stringify(data2)}</p>
      </div>
    </div>
  );
}
