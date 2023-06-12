import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './Login.scss';

const validationSchema = yup.object({
  username: yup.string().min(3).max(8).required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/,
      'Minimum 10 characters, at least one letter, one number and one special character:'
    )
    .required(),
});

export default function Login({ onLogin }) {
  const [reg, setReg] = useState([]);

  const handleSubmit = (values) => {
    const { username, password } = values;
    const user = reg.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      onLogin(user);
    } else {
      alert('Неверное имя пользователя или пароль!');
    }
  };

  const handleRegistration = (values) => {
    const { username, password } = values;
    const userExists = reg.some((user) => user.username === username);
    if (!userExists) {
      alert('Регистрация успешна!');
      setReg([...reg, { username, password }]);
      console.log([...reg, { username, password }]);
    } else {
      alert('Пользователь с таким именем уже существует!');
    }
  };

  return (
    <div className="container">
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="form" autoComplete="off">
            <h1>Вход</h1>
            <div className="form-group">
              <Field
                placeholder="Имя пользователя и Email"
                type="text"
                id="username"
                name="username"
              />
              <ErrorMessage name="username" component="small" />
            </div>

            <div className="form-group">
              <Field
                placeholder="Пароль"
                type="password"
                id="password"
                name="password"
              />
              <ErrorMessage name="password" component="small" />
              <p className="forgotPassword">
                <a href="#!">Забыли пароль?</a>
              </p>
            </div>

            <div className="btn-group">
              <input type="submit" value='Войти'className="submit-btn" />
              <button type="button" className="submit-btn-register" onClick={() => handleRegistration(values)}>Регистрация</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
