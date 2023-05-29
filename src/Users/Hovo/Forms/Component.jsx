export default function Component({ handleSubmit,langLimit }) {
	return (
	  <form onSubmit={handleSubmit}>
		<div>
		  <label htmlFor="username">Username</label>
		  <input type="text" id="username" required />
		</div>
		<div>
		  <label htmlFor="email">Email</label>
		  <input type="text" id="email" required />
		</div>
		<div>
		  <label htmlFor="lastname">Lastname</label>
		  <input type="text" id="lastname" required />
		</div>
		<div>
		  <label htmlFor="languages">Select languages</label>
		  <select name="languages" id="languages">
			<option value="javascript" disabled={langLimit('javascript')}>JavaScript</option>
			<option value="html" disabled={langLimit('html')}>HTML</option>
			<option value="css" disabled={langLimit('css')}>CSS</option>
			<option value="react" disabled={langLimit('react')}>React.js</option>
			<option value="node" disabled={langLimit('node')}>Node.js</option>
		  </select>
		</div>
		<div>
		  <input type="submit" value="register" />
		</div>
	  </form>
	);
  }
  