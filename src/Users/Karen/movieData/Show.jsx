import React from "react"


export default function Show({ data, cancelFunc, secondClick }) {
	return (
		<>
			<table className="Big__tab">
				<thead>
					<tr>
						<th>Title</th>
						<th>Genre</th>
						<th>Stock</th>
						<th>Rate</th>
					</tr>
				</thead>
				<tbody>
					{
						data.map(elem => {
							return <tr key={elem.id}>
								<th>{elem.title}</th>
								<th>{elem.genre}</th>
								<th>{elem.stock}</th>
								<th>{elem.rate}<i className="fa-solid fa-trash icon icon" onClick={() => cancelFunc(elem.id)}></i></th>
							</tr>
						})
					}
				</tbody>
			</table>
			<button className="sort_but" onClick={secondClick}>Sort to rating</button>
		</>
	)
}