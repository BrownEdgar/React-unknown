import useRandom from './useRandom';
import './App.scss'

export default function App() {
  const [data, { shuffle, sorted, max, min, }] = useRandom({
    type: 'number',
    count: 10,
    options: {
      start: 100,
      end: 1540,
    },

  });

  return (
    <div>
      
      <button onClick={shuffle}>Shuffle</button>
      <button onClick={sorted}>Sort</button>
      <button onClick={max}>Max</button>
      <button onClick={min}>Min</button>

      <div>Data: {JSON.stringify(data)}
  
      </div>
    </div>
  );
}
