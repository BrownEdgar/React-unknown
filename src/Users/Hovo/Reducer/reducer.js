import { ADD_SHUFFLE, ADD_POSTS, ADD_DEVELOPER } from "./actionTypes";

export const initialState = {
    actions: 0,
    developers: [],
    posts: [],
    arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
};

  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_POSTS:return  {
          ...state,
          posts: action.payload,
          actions: actionPlus(state),
        };
        
      case ADD_SHUFFLE: return arrShuffle(state);
        
      case ADD_DEVELOPER:return {
          ...state, 
          developers: [...state.developers,action.payload],
          actions: state.actions + 1,
        };
      default: return state;
    }
  }
  
  const actionPlus = (state) => {
    if (state.posts.length === 0) {
      return state.actions + 1;
    }
    return state.actions;
  };
  
  const arrShuffle = (state) => {
    const arr = state.arr.sort(() => Math.random() - 0.5);
    return { ...state, arr, actions: state.actions + 1 };
  };
