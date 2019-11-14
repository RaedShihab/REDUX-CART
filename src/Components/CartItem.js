import React from 'react';
import {removeFromCart} from '../store/actions/action';
import {connect} from 'react-redux';

 function CartIcon(props) {
    // const product = props.product;
    // const quntity = props.quantity;
    const {product} = props;
    const {quantity} = props;
    const {index} = props;


    return (
        <div className="card">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                    {product.name}
                </h5>
                <p className="card-text">
                    Price {product.price}$
                    <br />
                    Quantity: {quantity}
                    <br />
                    Total: {product.price * quantity}$
                </p>
                
                <button
                onClick={()=>props.remove(index)}
                className="btn btn-danger"> 
                Delete <i className='fa fa-trash'></i>
                </button>
                
            </div>
        </div>
    );
   
}

const mapStateToProps = (state)=> {
    return {
        data: state.cart,
        total : state.cart.reduce((acc, item)=>{ return acc + item.quantity* item.product.price }, 0)
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        remove: (index) => dispatch(removeFromCart(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)