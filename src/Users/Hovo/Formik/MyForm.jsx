import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  username: yup.string().min(3).max(8).required(),
  password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/, 'Minimum 8 characters, at least one letter, one number and one special character:').required(),
});

export default function MyForm() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit(values, { resetForm }) {
      alert("Welcome " + values.username + "!");
      resetForm();
    },
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <h1>Вход</h1>
      <div className="form-group">
        <label htmlFor="username"></label>
        <input
          placeholder='Имя пользователя и Email'
          type="text"
          id="username"
          name="username"
          value={formik.values.username}
          autoComplete="username"
        // Input elements should have autocomplete attributes (suggested: "username")
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
          <p className="error-message">{formik.errors.username}</p>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="password"></label>
        <input
          placeholder='Пароль'
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          autoComplete="current-password"
        // Input elements should have autocomplete attributes (suggested: "current-password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="error-message">{formik.errors.password}</p>
        ) : null}
        <p className='forgotPassword'><a href="#!">Забыли пароль?</a></p>
      </div>
      
      <div className="btn-group">
        <input type="submit" value="Bойти" className="submit-btn" />
        <input type="submit" value="Регистрация" className="submit-btn-register" />
      </div>
    </form>
  );
}