import React from "react";
import CartItem from "../Components/CartItem";
import {connect} from 'react-redux';


class Cart extends React.Component{

    render(){
        return (
            <div>
                <h1>Products</h1>

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
                <button className='btn btn-primary btn-block'> Pay</button>
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        data: state.cart,
        total : state.cart.reduce((acc, item)=>{ return acc + item.quantity* item.product.price }, 0)
    }
}

export default connect(mapStateToProps)(Cart)