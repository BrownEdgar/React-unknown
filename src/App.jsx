import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { getAsyncTodos, addTodos } from './store/features/todos/todosSlice'
import {addNewUser} from './store/features/newUsers/newUsersSlice'
import NewUserCard from './components/NewUserCard/NewUserCard'


export default function App() {
  const newUsers = useSelector(state => state.newUsers) 
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const {username} = e.target
    const addedUser = {
      id: 1,
      name: username.value,
      contact: {
        address: "3089 Waelchi Keys",
        phone: "711.874.8437 x58199",
        email: "userGmail@gmail.com"
      }
    }
    dispatch(addNewUser(addedUser))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id='username'/>
        <button type='submit'>add user</button>
      </form>
      <section>
        {newUsers.data.map(user => {
          return <NewUserCard newUser={user}/>
        })}
      </section>
    </div>
  )
}