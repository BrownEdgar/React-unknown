export default function Form({ handleSubmit, disable }) {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="username" >Username</label>
				<input type="text" id='username' required/>
			</div>
			<div>
				<label htmlFor="lastname" >Lastname</label>
				<input type="text" id='lastname' required/>
			</div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" required/>
            </div>
			<div>
				<label htmlFor="languages">Select languages</label>
				<select name="languages" id="languages" defaultValue="">
					<option value="" disabled></option>
					<option value="javascript">javascript</option>
					<option value="html">html</option>
					<option value="css">css</option>
					<option value="react" disabled={disable}>React.js</option>
					<option value="node">Node.js</option>
				</select>
			</div>
			<div>
				<input type="submit" value='register'/>
			</div>
		</form>
	)
}