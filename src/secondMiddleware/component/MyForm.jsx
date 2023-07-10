import { addData } from '../app/features/data/dataSlice';
import { useDispatch } from 'react-redux';

export default function MyForm() {

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
  <div className="form">
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" placeholder="ID" pattern="[0-9]+" required/>
      <input type="text" name="name" placeholder="Name" required/>
      <input type="text" name="address" placeholder="Address" required/>
      <input type="text" name="phone" placeholder="Phone" required/>
      <input type="email" name="email" placeholder="Email" required/>
      <input type="submit" value='Submit'/>
    </form>
  </div>
  );
};