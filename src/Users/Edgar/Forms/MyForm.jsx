import React from 'react'

export default function MyForm({ handleSubmit }) {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="username" >Username</label>
				<input type="text" id='username'/>
			</div>
			<div>
				<label htmlFor="lastname" >Lastname</label>
				<input type="text" id='lastname'/>
			</div>
			<div>
				<label htmlFor="languages">Select languages</label>
				<select name="languages" id="languages" defaultValue="html">
					<option value="" selected disabled></option>
					<option value="javascript">javascript</option>
					<option value="html">html</option>
					<option value="css">css</option>
					<option value="react" disabled>React.js</option>
					<option value="node">Node.js</option>
				</select>
			</div>
			<div>
				<input type="submit" value='register'/>
			</div>
		</form>
	)
}
