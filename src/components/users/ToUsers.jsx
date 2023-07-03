import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, closeUsers } from "../../app/features/users/usersSlice";
import axios from "../../axios";

 export default function ToUsers() {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    const getUsers = () => {
      axios.get('users').then(res => dispatch(addUser(res.data)))
    }
    
    const deleteUsers = (id) => {
      dispatch(deleteUser({ id }))
    }

    const closUser = () => dispatch(closeUsers())
    

  return (
    <div className="info">
      {users.length > 0 
        ? <button onClick={closUser}>Close Users</button> 
        : <button onClick={getUsers}>Open Users</button>}
      {
        users.map(user => (
          <p key={user.id}>
            Name:{' '} {user.name}
          <span onClick={() => deleteUsers(user.id)} className="trash">
            &times;
          </span>
          </p>
        ))
      }
      
    </div>
  );
};