import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { addUser } from './store/features/users/usersSlice'


function App() {
  const carts = useSelector(state => state) 
  const dispatch = useDispatch()
  console.log(state);

  useEffect(() => {
    dispatch(getAsyncCarts())
  },[])
  return (
    <>

    </>
  )
}

export default App
