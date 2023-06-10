import PropTypes from 'prop-types'
import axios from 'axios';
import { useState, useEffect} from 'react'
import {FiEdit2} from 'react-icons/fi'
import React, { Fragment } from 'react';
import './Posts.scss'

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [elementId, setElementId] = useState(null)
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts', {
            params:{_limit: 9}
        }).then(posts => setPosts(posts.data))
    }, [])

    const EditFuncPost = (userId) => {
        setElementId(userId);
    };

    useEffect(() => {
        console.log(elementId);
    }, [elementId]);
    
    const handleSubmit = (e, id) => {
        EditFuncPost(null)
        e.preventDefault()
        const {title2, body} =  e.target
        const user2 = posts.findIndex(elem => elem.id === id)

        const obj = {
            id,
            title: title2.value || posts[user2].title,
            body: body.value || posts[user2].body,
        }
        setPosts(posts.with(user2, obj))
    }

    return (
        <div className='div_post'>
          {
            posts.map(elem => {
              return (
                <React.Fragment key={elem.id}>
                  {elementId !== elem.id ? (
                    <ul key={elem.id} className='ul_posts'>
                      <span className='post_i' onClick={() => EditFuncPost(elem.id)}><FiEdit2/></span>
                      <h3>Id: {elem.id}</h3>
                      <span>Title2: <li>{elem.title}</li></span>
                      <span>Body : <li>{elem.body.slice(0, 60)}</li></span>
                    </ul> 
                  ) : (
                    <form className='forms2' onSubmit={(e) => handleSubmit(e, elem.id)} key={elem.id}>
                        <h5>Title : </h5>
                        <input type='text' placeholder={elem.title} id='title2' />
                        <h5>Completed : </h5>
                        <input type='text' placeholder={elem.body.slice(0, 20)} id='body' />
                        <input type="submit" value="Save"/>
                    </form>
                  )}
                </React.Fragment>
              );
            })
          }
        </div>
      );
}


Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.exact({
            userId: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired
        }).isRequired
    )
};