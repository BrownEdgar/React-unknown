import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import './App.scss'

const validationSchema = yup.object({
  username: yup.string().min(3).max(8).required(),
  email: yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address').required(),
  website: yup.string().matches(/^(https?:\/\/)?(www\.)?[a-zA-Z0-9_-]+(\.[a-zA-Z]{2,})+(\.[a-zA-Z]{2,})?/, 'Invalid website URL'),
});

export default function App() {
  const handleSubmit = (values, { resetForm }) => {
    alert('Form submitted:' + JSON.stringify(values,null,2));
    resetForm();
  }
	
  return (
    <div className='wrapper'>
      <Formik
        initialValues={{
          username: '',
          email: '',
          website: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={true}
      >
        <Form>
          <div className="forms">
          <h2>GET IN TOUCH</h2>
            <div className='wrap'>
              <div className='group'>
                <p>Tell us your name<span style={{ color: 'red' }}>*</span></p>
                <Field type='text' id='username' name='username' placeholder='Enter your name' style={{ width: '220px' }} />
                <ErrorMessage name='username' component='small'/>
              </div>
              <div className='group'>
                <p>Enter your mail<span style={{ color: 'red' }}>*</span></p>
                <Field type='text' id='email' name='email' placeholder='Enter your email'  style={{ width: '220px' }}/>
                <ErrorMessage name='email' component='small'/>
              </div>
          </div>
              <p>Your website</p>
              <Field type='text' id='website' name='website' style={{ width: '100%' }} placeholder='http://' />
              <ErrorMessage name='website' component='small'/>
              <p>Message</p>
              <Field as='textarea' id='message' name='message' className='textarea-field' placeholder='Your message here...' />
            <div className="btn-group">
              <input type="submit" value="Submit" className="submit-btn" />
            </div>
          </div>
            <h5>Call us on* 001<span>345</span>6178</h5>
        </Form>
      </Formik>
    </div>
  );
};
