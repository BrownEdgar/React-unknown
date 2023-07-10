import { useSelector } from 'react-redux';
import MyForm from './component/myForm';
import './App.css'; 

export default function App() {
  const data = useSelector((state) => state.data);
  
return (
  <div className="App">
    <MyForm/>
    <div className="items">
    {data.map((item) => (
      <div key={item.id} className="item">
        <div className="item-list">
          <span>ID: {item.id}</span>
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
  </div>
)
}
