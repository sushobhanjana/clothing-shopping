import React from "react";
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg'; 
import { connect } from "react-redux";
import { togglecarthidden } from "../../redux/cart/cart.actions";
import './cart-icon.styles.scss'

const CartIcon = ({togglecarthidden}) => (
    <div className="cart-icon" onClick={togglecarthidden}>
        <ShoppingBagIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    togglecarthidden: () => dispatch(togglecarthidden()) 
});

export default connect(null,mapDispatchToProps)(CartIcon);