import img1 from './img/img1.jpg';
import img3 from './img/img2.jpg';
import img2 from './img/img3.jpg';
import './App.css'

function App() {
	const users = [{
		id: 1,
		title: 'Better Chemistry',
		text: 'Ten moments that defined Premier League title race. Ten moments that defined Premier League title race',
		image: img1,

	},
	{
		id: 2,
		title: 'Better Pracituces',
		text: 'Leeds Premier League future a thread as West Ham came from behind to defeat Sam Allardyces side 3-1 on his return to the London Stadium.',
		image: img2,
	},
	{
		id: 3,
		title: 'Better Collaboration',
		text: 'PGA Championship LIVE! Latest updates as Rory McIlroy, Scottie Scheffler, Jon Rahm feature at Oak Hill',
		image: img3,

	}
	]
	console.log(users)
	return (
		<div className='cart-item'>
			{
				users.map(elem => {
					return (
						<div className='item' key={elem.id}>
							<img src={elem.image} alt={elem.title}></img>
							<p className='h1'>{elem.title}</p>
							<p>{elem.text}</p>
							<button onClick={() => {
								users[0] = 5
								console.log(users)
							}}>Read More</button>
						</div>
					)
				})
			}
		</div>
	)

}

export default App
