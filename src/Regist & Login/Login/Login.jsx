import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { NavLink, useLoaderData} from 'react-router-dom'
import ROUTES from '../route/route'  
import  './Login.scss'


const validationSchema = yup.object({
    username: yup.string().min(5).max(10).required(),
    email: yup.string().email().required(),
    password: yup.string(),
})


export default function Login({ onSubmit, data }) {
    console.log(data)
    const handleSubmit = (values, {resetForm}) => {
        onSubmit(values)
        resetForm()
       
        // if (Object.keys(values).every(elem => elem !== '')) {
        //     navigate(ROUTES.HOME);
        //   } else {
        //     alert('Please fill in all the fields');
        //   }
        //   resetForm()

        // if(data.username && data.password === )
       
            console.log(values)
        
    
    }


    return (
        <div className='glav_div'>
          <Formik
            initialValues={{
              username: '',
              password: '',  
            }}
            validationSchema={validationSchema}
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
                    <h1 className='login'>Login</h1>
                    <div className='div_but'>
                        <Field type='text' id='username' name='username' placeholder="Name"/>
                        <Field type='password' id='password' name='password' placeholder="Password"/>
                    </div>
                    <button className='submit_but' type='submit'>Login</button>
                </div>
            </Form>
          </Formik>
        </div>
      );
    }

 