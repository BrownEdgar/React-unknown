
export default function Modal({isOpen}){
    function cancelModal(){
        isOpen[1](!isOpen[0])
    }
    function removeTodo(){
        
    }
    return(
        <div className="modal">
            <div className="modal__Content">
                <span>Are you sure</span>
                <button onClick={cancelModal}>Cancel</button>
                <button>Remove</button>
            </div>
        </div>
    )
}