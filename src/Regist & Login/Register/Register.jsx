import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { NavLink, useNavigate} from 'react-router-dom'
import ROUTES from '../route/route'  
import  './Register.scss'
import { useState, useEffect} from 'react'



// const validationSchema = yup.object({
//     username: yup.string().min(5).max(10).required(),
//     email: yup.string().email().required(),
//     password: yup.string(),
// })

export default function Register({ onSubmit, data}) {
  const navigate = useNavigate()

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values)
    if (Object.keys(values).every(elem => elem !== '')) {
      navigate(ROUTES.LOGIN);
    } else {
      alert('Please fill in all the fields');
    }
    resetForm()
  }
    
    return (
        <div className='glav_div'>
          <Formik
            initialValues={{
              username: '',
              email: '',
              password: '',  
            }}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnChange={false}
            validateOnBlur={true}
            
          >
            
            
            <Form >
            <div className='error-div'>
                <ErrorMessage>
                    {
                        (errors) => {
                            return(
                                <>
                                    {Object.keys(errors).map((elem) => {
                                        return(
                                            <p  key={elem} className='p_error'>{errors[elem]}</p>
                                        )
                                    })}
                                </>
                            )
                        }
                    }
                </ErrorMessage>
            </div> 
                <div className='form'>
                    <h1>REGISTRATION</h1>
                    <div className='div_but'>
                        <Field type='text' id='username' name='username' placeholder="Enter your name"/>
                        <Field type='email' id='email' name='email' placeholder="Enter your email"/>
                        <Field type='password' id='password' name='password' placeholder="Enter your password"/>
                    </div>
                      <button className='submit_but' type='submit'>Register</button> 
                </div>
            </Form>
          </Formik>
          <NavLink className='submit_but' to={ROUTES.HOME}>Home</NavLink>
        </div>
      );
    }