import { useFormik } from 'formik'
import * as yup from 'yup'
import './App.scss'
import { useState } from 'react'
import ErrorMessage  from './ErrorMessage'

const validationSchema = yup.object({
    username: yup.string().min(5).max(10).required(),
    password: yup.string().matches(/"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/, "Minimum eight characters, at least one letter, one number and one special character")
})

export default function App() {
    const [data, setData] = useState(null)
    const formik = useFormik({
        initialValues : {
            username: "",
            password: ""
        },
        onSubmit(values, {resetForm}){
            resetForm()
            setData(values)
        },
        validationSchema,
    })
    
console.log(data)
    return(
        <div className='glav_div'>
            <div className='div_registr'>
                <h1>Вход</h1>
                <form onSubmit={formik.handleSubmit}>
                    {formik.touched.username?<ErrorMessage message={formik.errors.username}/>: null}
                    <input type="text"
                    placeholder='Имя пользователя или Email' 
                    name='username'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    <input type="password"
                    placeholder='Пароль' 
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                     <h5>Забыли пароль?</h5>
                    {formik.touched.password ?<ErrorMessage message={formik.errors.password}/>: null}
                    <div className='button_div'>
                        <input type="submit" value="Войти" className='voy_but'/>
                        <input type="submit" value="Регистрация" className='regist_but' disabled={true}/>
                    </div>
                </form>
            </div>
        </div>
    )
}