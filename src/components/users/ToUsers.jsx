import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "../../app/features/users/usersSlice";
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

  return (
    <div className="info">
      <button onClick={getUsers}>Users</button>
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