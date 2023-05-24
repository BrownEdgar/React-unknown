import { useState } from "react"

export default function Todos({id, title, isOpen}){
    function openModal(){
        isOpen[1](!isOpen[0])
    }
    return(
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td><button onClick={openModal}>remove</button></td>
        </tr>
    )
}