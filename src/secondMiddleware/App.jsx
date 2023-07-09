import { useSelector, useDispatch } from 'react-redux';
import { addData } from './app/features/data/dataSlice';
import './App.css'; 

export default function App() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, name, address, phone, email } = e.target;
    const newData = {
      id: id.value,
      name: name.value,
      contact: {
        address: address.value,
        phone: phone.value,
        email: email.value,
      },
      registerDate:null
    };
    dispatch(addData(newData));
  };

  return (
    <div className="App">
  <div className="form">
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" placeholder="ID" pattern="[0-9]+" required/>
      <input type="text" name="name" placeholder="Name" required/>
      <input type="text" name="address" placeholder="Address" required/>
      <input type="text" name="phone" placeholder="Phone" required/>
      <input type="text" name="email" placeholder="Email" required/>
      <input type="submit"/>
    </form>
  </div>
  {data.map((item) => (
    <div key={item.id} className="item">
      <div className="todo-list">
        <span>ID:{item.id}</span>
        <h3>{item.name}</h3>
        <p>&#9672; {item.contact.address}</p>
        <p>&#9742; {item.contact.phone}</p>
        <p>&#9993; {item.contact.email}</p>
        {item.registerDate && (
          <p className='info-group'>&#9745; {item.registerDate}</p>
        )}
      </div>
    </div>
  ))}
</div>
  );
}
