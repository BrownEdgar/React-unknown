import { useState } from 'react'
import './App.css'


export default function Form(){
    const [users, setUsers] = useState([])
    const [user, setUser] = useState()
    const submit = (e) => {
        e.preventDefault();
        const { name, email, subject, any } = e.target;
        setUser({
            id: new Date().getTime(),
            name: name.value,
            email: email.value,
            subject: subject.value,
            any: any.value
        })
        setUsers([...users, user])
        console.log(users);
    }
    return(
        <form className='formCard' onSubmit={submit}>
            <div className='inputs'>
                <div>
                    <label>Name</label>
                    <input type='text' id='name'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' id='email'/>
                </div>
            </div>
            <div>
                <div>
                    <label>Subject</label>
                    <input type='text' id='subject' className='subjectInp'/>
                </div>
                <div>
                    <label>Type Here</label>
                    <input type='text' id='any' className='typeHereInp'/>
                </div>
            </div>
            <div>
                <button type='submit' onClick={submit} className="submitButton">Submit</button>
            </div>
            
        </form>
    )
}