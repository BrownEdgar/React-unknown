import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import './App.scss'

const validationSchema = yup.object({
	username: yup.string().min(3).max(18).required(),
	password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Minimum eight characters, at least one letter and one number:"),
	email: yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Email does not match'),
	http: yup.string().matches(/^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g, 'Link does not match')

})


export default function App() {

	const handleSubmit = (values, resetForm) =>{
		console.log(values);
		resetForm()
	}
	return (
		<div className='wrapper'>
			<Formik
			initialValues ={{
				username: '',
				password: '',
				email: '',
				http: ''
			}}
			validationSchema = {validationSchema}
			onSubmit = {handleSubmit}
			validateOnChange = {false}
			validateOnblur= {true}
			>
			<Form>
				<h1>GET IN TOUCH</h1>
				<div className="start-inp">

				<div>
					<label htmlFor="username" >Tell un your name</label>
					<Field type="text" id='username' name='username'placeholder='Enter your name' className='inp-Name'/>
					<ErrorMessage name='username' component = 'small' className='error'/>
				</div>
				<div>
					<label htmlFor="email" >Enter your email</label>
					<Field type="email" id='email' name='email'placeholder='Enter your email' className='inp-Email'/>
					<ErrorMessage name='email' component = 'small' className='error'/>
				</div>
					</div>lassName
				<div>
					<label htmlFor="http">Your Website</label>
					<Field type="http" id='http' name='http' placeholder='http://'/>
					<ErrorMessage name='http' component = 'small' className='error'/>
				</div>
				<div>
					<label htmlFor="http">Message</label>
					<Field as='textarea' id='message' name='message' placeholder='Your message here..'/>
				</div>
				<div>
					<input type="submit" value="SUBMIT" />
				</div>
			</Form>
			</Formik>

		</div>
	)
}
