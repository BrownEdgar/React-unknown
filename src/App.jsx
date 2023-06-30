import { useSelector, useDispatch } from "react-redux";


 export default function App() {
const users = useSelector(state => state)
const dispatch = useDispatch()
const handleClick = () => {
dispatch({ type:'name', payload: 'Samvel' })
}




  return (
    <div>
        {JSON.stringify(users)}
        <button onClick={handleClick}>Change</button>
    </div>
  );
};