import React from  "react"

const greenField = ['username','email']

export default function ErrorMessage({ fieldName, message, touched }) {
    return (
			<>
				{touched ? <p className={`${greenField.includes(fieldName) ? 'green' : ''}`}>{message}</p> : null }
			</>
		)
}