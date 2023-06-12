import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './Login.scss';

const validationSchema = yup.object({
  username: yup.string().min(3).max(8).required(),
  password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/, 'Minimum 10 characters, at least one letter, one number and one special character:').required(),
});

export default function Login({ onLogin }) {
  const [reg, setReg] = useState([]);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit(values, { resetForm }) {
      const { username, password } = values;
      const user = reg.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        onLogin(user); 
      } else {
        alert('Неверное имя пользователя или пароль!');
        resetForm();
      }
    },
    validationSchema,
  });

  const handleReg = () => {
    const { username, password } = formik.values;
    const userCheck = reg.some((user) => user.username === username);
    if (!userCheck) {
      alert('Успешная регистрация!');
      setReg([...reg, { username, password }]);
      console.log([...reg, { username, password }]);
    } else {
      alert('Пользователь с таким именем уже существует!');
    }
  };

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit} className="form" autoComplete="off">
        <h1>Вход</h1>
        <div className="form-group">
          <input
            placeholder="Имя пользователя или Email"
            type="text"
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username ? (
            <p className="error-message">{formik.errors.username}</p>
          ) : null}
        </div>

        <div className="form-group">
          <input
            placeholder="Пароль"
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="error-message">{formik.errors.password}</p>
          ) : null}
          <p className="forgotPassword">
            <a href="#!">Забыли пароль?</a>
          </p>
        </div>

        <div className="btn-group">
          <input type="submit" value="Bойти" className="submit-btn" />
          <input type="button" value="Регистрация" className="submit-btn-register"onClick={handleReg}/>
        </div>
      </form>
    </div>
  );
}
