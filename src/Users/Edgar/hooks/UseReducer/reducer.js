import {  ADD_ELEMENT, ADD_TODO, FIND_FIVE, SORTED_DATA } from "./actionTypes";

export const initialState = {
	data:  [ 154,42,1,87,695,36,2,10,39,9 ],
	todos: [],
	result: ''
};

export default function reducer(state = initialState, action) {
	console.log(action)


	switch (action.type) {
		case ADD_ELEMENT: 
		return { 
			...state, 
			data: state.data.concat(action.payload.item)
		}

		case SORTED_DATA: return sortedData(state)
		case FIND_FIVE: return findFive(state)
		case ADD_TODO: return { ...state, todos: action.payload }
		
		default: return state;
	}
}


function sortedData(state) {
	const data = state.data.toSorted((a,b) => a- b)
	return { ...state, data }
}

function findFive(state) {
	const result = state.data.filter(number => number.toString().includes('5'))
	return { ...state, result }
}