import React from "react";
import { connect } from "react-redux";
import CustomButton from '../custom-button/custom-button.component';
import CartItems from "../cart-items/cart-items.component";

import './cart-dropdown.styles.scss'

const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => 
                    (<CartItems key={cartItem.id} item={cartItem} />)
                )
            }
            
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>    
    </div>
)

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown);

