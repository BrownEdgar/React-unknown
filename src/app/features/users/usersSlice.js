const initialUsersValue = [{
  id:1,
  name:"Jhon"
}]

 export default function usersReducer(state = initialUsersValue ,action) {
  switch (action.type) {
    case 'name': return [{
      id:1,
      name: action.payload
    }]
      
    default: return state
  }
  };