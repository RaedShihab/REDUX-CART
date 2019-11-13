import React from 'react';

export default function CartIcon(props) {
    // const product = props.product;
    // const quntity = props.quantity;
    const {product} = props;
    const {quantity} = props;


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
                
                <a className="btn btn-danger"> 
                Delete <i className='fa fa-trash'></i>
                </a>
                
            </div>
        </div>
    );
   
}