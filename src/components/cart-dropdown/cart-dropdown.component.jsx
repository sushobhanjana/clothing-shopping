import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import CustomButton from '../custom-button/custom-button.component';
import CartItems from "../cart-items/cart-items.component";
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { withRouter } from "react-router-dom";

import './cart-dropdown.styles.scss'

const CartDropDown = ({ cartItems,history,dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { cartItems.length ? (
                cartItems.map(cartItem => 
                    (<CartItems key={cartItem.id} item={cartItem} />)
                )
            ): <span className="empty-message">Your cart is empty</span>
            }
            
        </div>
        <CustomButton onClick={ ()=> {
            dispatch(toggleCartHidden()) 
            history.push('/checkout') } }>GO TO CHECKOUT</CustomButton>    
    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));