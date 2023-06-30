const initialValue = [
    {
        id: 1,
        name: 'user'
    }
]

export default function usersReducer(state = initialValue, action){
    switch(action.type){
        case 'CHANGE_NAME': return [{
            id: 1,
            name: action.payload
        }]
        default: return state
    }
}