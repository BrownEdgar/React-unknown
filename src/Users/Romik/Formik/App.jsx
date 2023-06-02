import { useFormik } from 'formik'
import React, { useState } from 'react'
import Users from './Users'
import * as yup from 'yup'
import './App.scss'

const validationSchema = yup.object({
	username: yup.string().min(3).max(18).required(),
	password: yup.string().min(3).max(18).required().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Minimum eight characters, at least one letter and one number:")
})


export default function App(){
    const [users, setUsers] = useState([])
    const handleDelete = (id) => {
        const filtered = users.filter(elem =>elem.id !== id);
		setUsers(filtered)    }
    const handleRegister = (e) => {
	    e.preventDefault();
        const{
            id,
            username,
            password,
		} = e.target;
        const newUser = {
            id: Date.now(),
            username: username.value,
            password:password.value
        }
        setUsers([...users, newUser]);
	    e.target.reset()
    }
    
    const formik = useFormik({
        initialValues:{
            username: '',
            password: '',
        },

        onSubmit(values, { resetForm }) {
            resetForm()
        },

        validationSchema,
    })
    
    return (
        <>
            <div className="wrapper">
                <div className="headerAndForm">
                    <h2 className='login'>Log in</h2>
                    <form onSubmit={handleRegister}>
                        <div className="inputForm">
                            <input
                                type="text"
                                placeholder='Name or Email'
                                id='username'
                                name='username'
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                />
                                {(formik.touched.username && formik.errors.username) ? <p className='error'>{formik.errors.username}</p> : null}
                            <input 
                                placeholder='Password'
                                type="password"
                                id='password'
                                name='password'
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {(formik.touched.password && formik.errors.password) ? <p className='error'>{formik.errors.password}</p>: null}
                        </div>
                        <div className="forgotPassword">
                            <p>Forgot password?</p>
                        </div>
                        <div className="formButtons">
                            <button type='submit' value = {"register"} className='login'><p>Log in</p></button>
                            <button type='submit' value={'register'} className='register'><p>Reagistration</p></button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="wrapper-table">
				    <Users users={users} handleDelete = {handleDelete}/>
    		</div>
        </>
    )
}