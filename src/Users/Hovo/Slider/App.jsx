import { useReducer } from 'react';
import { initialState } from './reducer';
import reducer from './reducer';
import Slides from './Slides';
import './App.scss';

export default function App() {
  const [state] = useReducer(reducer,initialState)
	

    return (
      <div className='app'>
        <Slides slides={state.slides}/>
      </div>
    );
};