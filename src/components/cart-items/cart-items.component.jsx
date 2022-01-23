import React from "react";


import './cart-items.styles.scss'


const CartItems = ({item}) => {
    return (
        <div className='cart-item'>
            <img src={item.imageUrl} alt='item' />
            <div className='item-details'>
            <span className='name'>{item.name}</span>
            <span className='price'>
                {item.quantity} x ${item.price}
            </span>
            </div>
        </div>
    )
}

export default CartItems;