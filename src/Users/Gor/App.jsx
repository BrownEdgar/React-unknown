import  { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
	const [data, setData] = useState([]);
	console.log(data)
	useEffect(() => {
		async function getData() {
			const response = await axios('https://dummyjson.com/products')
			const data = response.data.products;
			setData(data);
		}
		getData();
	}, []);

	const handleDelete = (id) => {
		const deleteItem = data.filter(elem => elem.id !== id)
		setData(deleteItem)
	}

	// const sorts = () => {
	// 	const sortItems = data.tosorted(elem => { elem.rating })
	// }
	return (
		<div className="table">
			{
				data.map(elem => {
					return (
						<div className='item' key={elem.id}>
							<p>{elem.id}</p>
							<p>{elem.title}</p>
							<p>{elem.price}</p>
							<p>{elem.rating}</p>
							<button className='del' onClick={() => handleDelete(elem.id)}>Delete</button>
							{/* <button className='sorts' onClick={sorts}>Sort</button> */}
						</div>
					)
				})
			}
		</div>
	)
}
export default App;