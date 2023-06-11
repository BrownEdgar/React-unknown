import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import { useEffect, useState } from 'react'
import './Login.css'

const validationSchema = yup.object({
	username: yup.string().min(3).max(18).required(),
	password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Minimum eight characters, at least one letter and one number:"),
	email: yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Email does not match'),

})

export default function Reg() {
	const [users, setUsers] = useState([])
	const handleSubmit = (values, resetForm) =>{
		setUsers(users => [...users, values]);
		console.log(values);
		resetForm()
	}
	useEffect(()=>{
		console.log(users);
	},[users])
	return (
		<div className='wrapper'>
			<Formik
			initialValues ={{
				username: '',
				password: '',
				email: '',
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
					<Field type="text" id='username' name='username'placeholder='Enter your name' className='inp-Name'/>
					<ErrorMessage name='username' component = 'small' className='errorM'/>
				</div>
				<div>
					<label htmlFor="password" >Password</label>
					<Field type="password" id='password' name='password'placeholder='Enter your password' className='inp-Name'/>
					<ErrorMessage name='password' component = 'small' className='errorM'/>
				</div>
				<div>
					<label htmlFor="email" >Email add</label>
					<Field type="email" id='email' name='email'placeholder='Enter your email' className='inp-Email'/>
					<ErrorMessage name='email' component = 'small' className='errorM'/>
				</div>
				<div>
					<input type="submit" value="SUBMIT" className='btn' onClick={() =>  message()}/>
				</div>
					</div>
			</Form>
			</Formik>

		</div>
	)
	function message (){
		if(ErrorMessage.value){
			alert('Запольните правилно')
		}
		else{
			alert('вы успешно зарегистрировались')
		}
	}
}
