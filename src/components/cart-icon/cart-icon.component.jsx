import React from "react";
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg'; 
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden,ItemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingBagIcon className="shopping-icon" />
        <span className="item-count">{ItemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()) 
});

const mapStateToProp = state => ({
    ItemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProp,mapDispatchToProps)(CartIcon);