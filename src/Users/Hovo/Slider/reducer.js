export const initialState = {
    slides:[{

        id: 1,
        image: "https://images.unsplash.com/photo-1580068829493-ee627a9eaf3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
        date: "July 22,2019",
        title: "Surfing at sunset",
        category: "uncategorized"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1582761371647-a846458a0e65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        date: "February 12,2019",
        title: "Amazing view",
        category: "uncategorized"
    },{
        id: 3,
        image: "https://images.unsplash.com/photo-1503293962593-47247718a17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
        date: "May 15,2020",
        title: "Perfect frame",
        category: "uncategorized"
    }],
}

export default (state = initialState,{type}) =>{
    switch (type) {
        default: return state
    }
}