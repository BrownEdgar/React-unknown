import { data } from './Data';
import { useState } from 'react';
import Component from './Component';
import "./App.scss"

export default function App() {

	const [post, setPost] = useState(data);

	const deleteFilm = (id) => {
		const confirmDelete = window.confirm('Saved movie will be deleted!');
		if (confirmDelete) {
			const deletePost = post.filter(elem => elem.id !== id);
			setPost(deletePost);
		}
	}

	const sortedRate = () => {
		const sorted = post.toSorted((a, b) => b.rate < a.rate);
		setPost(sorted);
	}

	return (
		<div>
			<Component
				post={post}
				deleteFilm={deleteFilm}
				sortedRate={sortedRate}
			/>
		</div>
	)
}