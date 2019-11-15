import {createStore, compose, applyMiddleware} from 'redux';
import {cartReducer} from './reducers/index';
import thunk from 'redux-thunk';

// function getstate() {
//     const state = localStorage.getItem('item')
//     return state
// }

const initalState = {
    cart: [
        {
            product: {
            "id": 1,
            "name": "White Cat",
            "price": 100,
            "image": "/imgs/1.jpg",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        quantity: '5'
    },
    {
        product: {
        "id": 1,
        "name": "White Cat",
        "price": 100,
        "image": "/imgs/1.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    quantity: '6'
}
    ]
}

const store = createStore(cartReducer, initalState, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ) );    

export default store;