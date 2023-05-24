 import React from 'react'
 import PropTypes from 'prop-types'
 import "./App.css"
 import {useState} from  'react'

 export default function Show({data, handleClick}) {
    return(
        <>
            {
                data.map(elem => {
                    return <div key={elem.id} className='todos_div'>
                        <i className="fa-solid fa-x icon" onClick={() => handleClick(elem.id)}></i>
                        <p>ID : {elem.id}</p>
                        
                        <p>Title : {elem.title.slice(0, 28)}</p>
                        <p>Completed : {elem.completed ? "true" : "false"}</p>
                    </div>
                })
            }
        </>
    )
 }

 Show.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.exact(
            {
                userId: PropTypes.number,
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired, 
                completed : PropTypes.bool.isRequired,
            }
        )
    )
    
 }
