import {  ADD_TODO,  ADD_SHUFFLE, ADD_VALUE, ADD_IDENTIFIER, ADD_DELETTE} from './actionTypes';
import { useState } from 'react';

export const  initialState = {
 actions: 0,
  developers: [],
  posts: [],
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO: return {...state, actions: state.actions + 1, posts: state.posts.concat(action.payload)};
        case ADD_SHUFFLE : return {...state, actions: state.actions + 1, arr: [...state.arr.sort(() => (Math.random() - 0.5))]};
        case ADD_VALUE: return {...state, actions: state.actions + 1, developers: [...state.developers, action.payload]};
        case ADD_IDENTIFIER : return  {...state, actions: state.actions + 1, posts: action.payload}
        case ADD_DELETTE: return {...state, actions: state.actions + 1, posts: action.payload}
        default: return state;
    }
}
