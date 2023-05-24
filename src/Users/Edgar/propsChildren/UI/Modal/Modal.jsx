import React from 'react'

import './Modal.scss'

export default function Modal({ children, closeModal, variant }) {
	return (
		<div className={`Modal`}>
			<div className={`Modal__Content Modal__Content-${variant}`}>
				{children}
				<button onClick={closeModal}>X</button>
			</div>
		</div>
	)
}
