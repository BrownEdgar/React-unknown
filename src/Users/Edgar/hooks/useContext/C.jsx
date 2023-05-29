import  { useContext } from 'react';
import { MyContext } from './Context/Context';


export default function C() {
	console.log("c render...");
	const value = useContext(MyContext);

	return (
		<div>
			<h2>C Component {JSON.stringify(value)}</h2>
			<button onClick={value.handleClick}>change data</button>

			{/* use this only in class Component
			<MyContext.Consumer>
				{(value) => <h2>C Component {JSON.stringify(value)}</h2>}
			</MyContext.Consumer>
			 */}
		</div>
	)
}
