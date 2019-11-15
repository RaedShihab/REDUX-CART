import {createStore, compose, applyMiddleware} from 'redux';
import {cartReducer} from './reducers/index';
import thunk from 'redux-thunk';
import throttle from 'lodash.throttle';

function loadState() {
    try {
    const state = localStorage.getItem('cart')
    if(state !== null) {
      return JSON.parse(state);
    }
}   catch(err) {
    console.log(err)
} 

    return {cart : []}
}

function saveState() {
    const state = store.getState()
    console.log('saveState')
    localStorage.setItem('cart', JSON.stringify(state))
}

export const store = createStore(cartReducer, loadState(), compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ) );    

    store.subscribe(throttle( ()=> {
        saveState()
    }, 2000)
        )

export default store;