import axios from 'axios';
import { useState, useEffect } from 'react';
import UsersList from './UsersList';
import './App.css'

export default function App() {
    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setdata(res.data))
    }, [])

    return (
        <div>
            <UsersList data={data} />
        </div>

    )
}