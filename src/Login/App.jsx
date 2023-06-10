import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import './App.scss'

const validationSchema = yup.object({
    username: yup.string().min(5).max(10).required(),
    email: yup.string().email().required(),
    message: yup.string(),
    url: yup.string().url()
})

export default function App() {
    const handleSubmit = (values, {resetForm}) => {
        console.log(values)
        resetForm()
    }

    return (
        <div className='glav_div'>
          <Formik
            initialValues={{
              username: '',
              email: '',
              message: '',
              url: '',
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
                                    {Object.keys(errors).map((elem, index) => {
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
                    <h1>GET IN TOUCH</h1>
                    <div>
                        <Field type='text' id='username' name='username' placeholder="Enter your name"/>
                        <Field type='email' id='email' name='email' placeholder="Enter your email"/>
                    </div>
                   

                    
                    <button type='submit'>SUBMIT</button>
                </div>
            </Form>
          </Formik>
        </div>
      );
    }