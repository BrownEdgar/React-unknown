import { useFormik } from 'formik'
import * as yup from 'yup'
import './App.scss'

const validationSchema = yup.object({
	username: yup.string().min(3).max(18).required(),
	password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Minimum eight characters, at least one letter and one number:")
})


export default function App() {
	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		onSubmit(values, { resetForm }) {
			
			resetForm()
	
		},
		// validate(){
		// 	const errors = {};
		// 	if (!errors.username) {
		// 		errors.username = "Required!"
		// 	}
		// 	if (!errors.password) {
		// 		errors.password = "Required!"
		// 	}
		// 	return errors;
		// }
		validationSchema,
	})
	console.log(formik)
	return (
		<div className='wrapper'>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id='username'
						name='username'
						value={formik.values.username}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						/>
					{(formik.touched.username && formik.errors.username) ? <p className='error'>{formik.errors.username}</p> : null}
				</div>
				<div>
					<label htmlFor="password">password</label>
					<input
						type="password"
						id='password'
						name='password'
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						/>
					{(formik.touched.password && formik.errors.password) ? <p className='error'>{formik.errors.password}</p>: null}
				</div>
				<div>
					<input type="submit" value="register" />
				</div>
			</form>
		</div>
	)
}
