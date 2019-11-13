import React from "react";
import {getById} from "../api/products";
import {addTOCart} from '../store/actions/action';
import {connect} from "react-redux";

 class Product extends React.Component{

    state={
        loading: true,
        quantity: 0,
        product: {}
    };

    componentDidMount(){
        const id = this.props.match.params.id;

        getById(parseInt(id))
            .then(product => {
                this.setState({
                    product,
                    loading: false
                });
            })
    }

    handleQuantity = (event) => {
        const value = event.target.value;

        if(value < 0)
            return ;

        this.setState({
            quantity: value
        })
    }

    render(){
        console.log('from product', this.props)
        if(this.state.loading)
            return 'Loading ..';

        
        return (
            <div>
                <div className={'row'}>
                    <div className="col-6">
                        <img src={this.state.product.image} width={'100%'}/>
                    </div>
                    <div className="col-6">
                    <h1></h1>

                        <p>Price:</p>

                        <p>{this.state.product.price}</p>


                        <input type="number" onChange={this.handleQuantity} />
                        
                        <br /><br />

                        <p>Total: {this.state.quantity * this.state.product.price}</p>

                        <button className="btn btn-primary"
                        onClick={()=>this.props.addToCart(this.state.product, this.state.quantity)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        addToCart: (product, quantity)=> dispatch(addTOCart(product, quantity)),
    }
}

export default connect(null, mapDispatchToProps)(Product);