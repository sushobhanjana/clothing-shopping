import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'; 
import CheckoutItem from "../../components/checkout-items/checkout-items.component";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

import './checkout.styles.scss'

class CheckoutPage extends React.Component {
    render(){
        const {cartItems,totalAmount} = this.props;
        return (
            <div className="checkout-page">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Description</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                {
                    cartItems.map(cartItem =>
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                }
                <div className='total'>TOTAL: ${totalAmount}</div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    totalAmount:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)