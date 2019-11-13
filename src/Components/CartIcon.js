import React from 'react';
import {connect} from 'react-redux';

 function CartIcon(props) {
    return <div id='cart-icon'>
        <a href='/cart'>
        <i className="fas fa-shopping-cart"></i>
        <span className='badge badge-danger'>{props.data}</span>
        </a>
    </div>
}

const mapStateToProps = (state)=> {
    return {
        data : state.cart.reduce((acc, item)=>{ return acc + parseInt(item.quantity) }, 0)
    }
}

export default connect(mapStateToProps)(CartIcon)