import cartActionTypes from "./cart.actiontypes";

export const toggleCartHidden = () => ({
    type:cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addCartItem = item => ({
    type:cartActionTypes.ADD_ITEM,
    payload:item
})

export const clearCartItem = item => ({
    type:cartActionTypes.CLEAR_CART_ITEM,
    payload:item
})