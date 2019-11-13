import {ADD_TO_CART} from './action-types';
 
export const addTOCart = (product, quantity)=> {
    console.log('from action', {
        type: ADD_TO_CART,
        product,
        quantity
    } )
    return {
        type: ADD_TO_CART,
        product,
        quantity
    }
}