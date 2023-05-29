import React from 'react'

export default function MyForm({ handleSubmit, allFunc , emailFunc}) {
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
				<label htmlFor="email" >Email</label>
				<input type="email" id='email' onChange={emailFunc}/>
			</div>
			<div>
				<label htmlFor="languages">Select languages</label>
				<select name="languages" id="languages" defaultValue="html" >
					<option value=""  disabled></option>
					<option value="javascript" disabled={allFunc("javascript")}>javascript</option>
					<option value="html" disabled={allFunc("html")}>html</option>
					<option value="css" disabled={allFunc("css" )}>css</option>
					<option value="react" disabled={allFunc("react" )}>React.js</option>
					<option value="node" disabled={allFunc("node")}>Node.js</option>
				</select>
			</div>
			<div>
			
				<input type="submit" value='register'/>
			</div>
		</form>
	)
}
