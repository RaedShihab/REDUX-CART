import React from "react";
import CartItem from "../Components/CartItem";
import {connect} from 'react-redux';
import {placeOrder} from '../store/actions/action'

class Cart extends React.Component{

    render(){
        return (
            <div>
                <h1>Cart</h1>

                <div className="row">
                    {this.props.data.map((product, index) =>
                         <div className={'col-4'} key={product.product.id}>
                            <CartItem index={index} product={product.product} quantity={product.quantity}  />
                        </div>
                    )}
                </div>
                <h3>
                    Total: {this.props.total}
                </h3>
                <button 
                onClick= {()=> {
                    this.props.placeOrderPops()
                    alert('Your order has sent')
                }}
                className='btn btn-primary btn-block'> Place Order</button>
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    if(state.cart) {
    return {
        data: state.cart,
        total : state.cart.reduce((acc, item)=>{ return acc + item.quantity* item.product.price }, 0)
    }
}
}
const mapDispatchToProps = (dispatch)=> {
    return {
        placeOrderPops:()=> dispatch(placeOrder()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)