import {ADD_TO_CART} from './action-types';
import {REMOVE_FROM_CART} from './action-types';
 
export const addTOCart = (product, quantity)=> {
    return {
        type: ADD_TO_CART,
        product,
        quantity
    }
}

export const removeFromCart = (index)=> {
    return {
        type: REMOVE_FROM_CART,
        index
    }
}