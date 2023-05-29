
export default function Modal({ toggleModal, deleteTodo }) {

	return (
		<div className="Photo">
			<div className="modal__Content">
				<span>Are you sure</span>
				<button onClick={toggleModal}>Cancel</button>
				<button onClick={() => {
					deleteTodo()
					toggleModal()
				}}>Remove</button>
			</div>
		</div>
	)
}