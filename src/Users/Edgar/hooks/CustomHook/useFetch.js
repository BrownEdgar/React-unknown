import { useState,useEffect } from 'react';
import axios from 'axios'

export default function useFetch({target, options}) {
	const [data, setData] = useState([]);
	const [isLoading, setisLoading] = useState(false)
	const [error, setError] = useState({
		isError: false,
		errorMessage: ''
	})

	useEffect(() => {
		setisLoading(true)
		axios({
			baseURL: 'https://jsonplaceholder.typicode.com/',
			url: target,
			params: options ?? {}
		})
			.then(res => setData(res.data))
			.catch(err => {
				setError({
					isError:true,
					errorMessage: err.message
				})
			})
			.finally(() => setisLoading(false))
	}, [target])
	

	return {
		data, 
		isLoading, 
		isError: error.isError, 
		errorMessage: error.errorMessage
	}
}
