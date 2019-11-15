import {ADD_TO_CART, REMOVE_FROM_CART, PLACE_ORDER} from './action-types';
 
export const addTOCart = (product, quantity)=> {
    return {
        type: ADD_TO_CART,
        product,
        quantity
    }
}

 const createRemoveFromCart = (index)=> {
    return {
        type: REMOVE_FROM_CART,
        index
    }
}

export const removeFromCart = (index)=> {
    return (dispatch)=> {
        dispatch(createRemoveFromCart(index))   
    }
}

export const placeOrder = ()=> {
    return {
        type: PLACE_ORDER
    }
}