import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import './App.scss'


const validationSchema = yup.object({
	username: yup.string().min(3).max(18).required(),
	password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Minimum eight characters, at least one letter and one number:")
})


export default function App() {
	const handleSubmit = (values, { resetForm }) => {
		console.log(values);
		resetForm()
	}

	return (
		<div className='wrapper'>
			<Formik
				initialValues={{
					username: '',
					password: ''
				}}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
				validateOnChange={false}
				validateOnBlur={false}
			>
				<Form className='box'>
					<div>
						<ErrorMessage>
							{
								(errors) => {
									return (
										<>
											{Object.keys(errors).map(keys => {
												return (
													<p key={keys} className='err-alert'>{errors[keys]}</p>
												)
											})}
										</>
									)
								}
							}
						</ErrorMessage>
					</div>
					<div>
						<label htmlFor="username">Username</label>
						<Field type="text" id='username' name='username' />
					</div>
					<div>
						<label htmlFor="password">password</label>
						<Field type="password" id='password' name='password' />
					</div>
					<div>
						<Field as='select'>
							<option value=""></option>
							<option value="js">js</option>
							<option value="html">Html</option>
						</Field>
					</div>
					<div>
						<input type="submit" value="register" />
					</div>
				</Form>
			</Formik>

		</div>
	)
}
