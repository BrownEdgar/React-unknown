export  const initialState = {
    shoppingCart: [
        {
            id: 1,
            name: "Rose",
            image: "https://images.pexels.com/photos/1488310/pexels-photo-1488310.jpeg?cs=srgb&dl=pexels-dimitri-kuliuk-1488310.jpg&fm=jpg", 
            price: 20
        },
        {
            id: 2,
            name: "Lily",
            image: " https://images.unsplash.com/photo-1572454591674-2739f30d8c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", 
            price: 35
        },
        {
            id: 3,
            name: "Latus",
            image: "https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=2000", 
            price: 18
        }
    ]
}

export default function reducer(state = initialState, action) {
    
    switch(action.type) {
       case "delete": return deleteFunc(state, action.payload)
       default: return state;
    }
}

export  const deleteFunc = (state, id) => {
    const fill = state.shoppingCart.filter(elem => elem.id !== id)
    return {...state, shoppingCart:fill}
}