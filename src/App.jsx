import { useSelector, useDispatch } from 'react-redux'
import './App.css'

function App() {
  const users = useSelector(state => state)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch({type: 'CHANGE_NAME', payload: 'john'})
  }
  return (
    <>
      <div>
        <pre>
          {JSON.stringify(users)}
        </pre>
        <button onClick={handleClick}>click!</button>
      </div>

    </>
  )
}

export default App
