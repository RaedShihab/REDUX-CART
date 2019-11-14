import {ADD_TO_CART} from '../actions/action-types';
import {REMOVE_FROM_CART} from '../actions/action-types';


 export const cartReducer = (state, action)=> {
    switch(action.type) {
     case(ADD_TO_CART): {
        return {
            cart : [...state.cart, {product: action.product, quantity: action.quantity}]
        } 
        }
        case(REMOVE_FROM_CART): {
            const new_state = {...state};
            const index = action.index;
            new_state.cart.splice(index, 1)
            return new_state; 
            }

     default: 
        return state;
    }
} 

export default cartReducer