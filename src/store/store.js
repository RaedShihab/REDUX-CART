import {createStore, compose, applyMiddleware} from 'redux';
import {cartReducer} from './reducers/index';
import thunk from 'redux-thunk';

function loadState() {
    const state = localStorage.getItem('cart')
    if(state !== null) {
      return JSON.parse(state);
    }

    return {cart : []}
}

function saveState(state) {
    console.log('saveState')
    localStorage.setItem('cart', JSON.stringify(state))
}

export const store = createStore(cartReducer, loadState(), compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ) );    

    store.subscribe(()=> {
        saveState(store.getState())
    })
    // const data = store.getState()
    // console.log('store',data)
export default store;