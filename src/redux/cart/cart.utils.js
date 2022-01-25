export const addToCartItems = (cartItems,addtoNewItem) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === addtoNewItem.id
    );

    if(existingCartItem){
        
        return cartItems.map(cartItem => 
            cartItem.id === addtoNewItem.id
            ? {...cartItem,quantity:cartItem.quantity + 1}
            : cartItem 
        )
    }

    return [...cartItems,{...addtoNewItem,quantity:1}]
}

export const deleteItemFromCart = (cartItems,itemToDelete) => {
   return cartItems.filter(cartItem => cartItem.id !== itemToDelete.id )
}
