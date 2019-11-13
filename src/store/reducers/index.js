import {ADD_TO_CART} from '../actions/action-types';


 export const cartReducer = (state, action)=> {
    switch(action.type) {
     case(ADD_TO_CART): {
        return {
            cart : [...state.cart, {product: action.product, quantity: action.quantity}]
        }
          
        }

     default: 
        return state;
    }
} 

export default cartReducer