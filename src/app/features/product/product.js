 export const initialProduct = [
    {
        id: 1,
        name: "computer",
        model: "Apple",
    }
]

export default function productReducer(state = initialProduct, action) {
    switch (action.type) {
        case "CHANGE": return {id:1, name: "computer", model: action.payload}
        default: return state
    }
}