import React from "react";
import { connect } from "react-redux";
import { addCartItem, clearCartItem, removeItem } from "../../redux/cart/cart.actions";


import './checkout-items.styles.scss'



const CheckoutItem = ({ cartItem,clearItem,increase,decrease }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=> decrease(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=> increase(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=> clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearCartItem(item)),
    increase: item => dispatch(addCartItem(item)),
    decrease: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);