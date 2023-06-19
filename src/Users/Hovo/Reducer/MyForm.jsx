import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from "formik";

const validationSchema = yup.object({
  name: yup.string().required(),
});

 export default function MyForm( {handleSubmit} ) {

 return (
    <>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Field
            type='text'
            id='name'
            name='name'
            placeholder='Enter your name'
            className="input-field"
          />
          <input type="submit" value="Submit" className="submit-btn" />
        </Form>
      </Formik>
    </>
  );
};