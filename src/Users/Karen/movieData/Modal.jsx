import React  from "react";

export default function Modal({children, cancelFunc, deleteFunc}) {
    return(
        <div className="Modal">
            <div className="Modal__info">
                {children}
                <div className="but_div">
                    <button className="canacel_button" onClick={cancelFunc}>Cancel</button>
                    <button className="deleter_button" onClick={deleteFunc}>Delete</button>
                </div>
            </div>
        </div>
    )
}