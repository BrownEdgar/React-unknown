import { ADD_ELEMENT, SHUFFLE} from "./actionType"
export const initialState = {
    actions: 0,
    developers: [],
    posts: [],
    arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
  }
export default function reducer(state = initialState, action){
    switch (action.type) {
        case ADD_ELEMENT: return {...state, developers: [...state.developers, action.payload]};
        case SHUFFLE: return {...state, arr: [...state.arr,].sort(() => Math.random() - 0.5)}

        default: return state
    }
}