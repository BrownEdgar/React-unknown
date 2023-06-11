import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import './Login.css'

const validationSchema = yup.object({
	username: yup.string().min(3).max(18).required(),
	password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Minimum eight characters, at least one letter and one number:"),
})


export default function Login() {
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
			}}
			validationSchema = {validationSchema}
			onSubmit = {handleSubmit}
			validateOnChange = {false}
			validateOnblur= {true}
			>
			<Form>
				<div className="start-inp">

				<div>
					<label htmlFor="username" >Username</label>
					<Field type="text" id='username' name='username'placeholder='Enter your username' className='inp-Name'/>
					<ErrorMessage name='username' component = 'small' className='errorM'/>
				</div>
				<div>
					<label htmlFor="password" >Password</label>
					<Field type="password" id='password' name='password'placeholder='Enter your password' className='inp-Name'/>
					<ErrorMessage name='password' component = 'small' className='errorM'/>
				</div>
				<div>
					<input type="submit" value="SUBMIT" className='btn'/>
				</div>
					</div>
			</Form>
			</Formik>

		</div>
	)
}
