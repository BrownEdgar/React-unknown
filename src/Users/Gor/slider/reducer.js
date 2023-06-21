export const initialState ={
    cards: [
        {
            id: 1,
            data: 'null',
            title: 'null',
            image: './img/1.jpg'
        },
        {
            id: 2,
            data: 'null',
            title: 'null',
            image: '.public/img/2.jpg'
        },
        {
            id: 3,
            data: 'null',
            title: 'null',
            image: './img/3.jpg'
        },
        {
            id: 4,
            data: 'null',
            title: 'null',
            image: './img/4.jpg'
        },
        {
            id: 5,
            data: 'null',
            title: 'null',
            image: './img/5.jpg'
        }
    ]
}
export default (state = initialState, {type, payload}) =>{
    switch (type) {
			default: return state
    }
}
