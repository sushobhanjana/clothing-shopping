import cartActionTypes from "./cart.actiontypes";
import { addToCartItems, removeCartItem, deleteItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
}

const cartReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addToCartItems(state.cartItems,action.payload)
            }
        case cartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeCartItem(state.cartItems,action.payload)
            }    
        case cartActionTypes.CLEAR_CART_ITEM:
            return{
                ...state,
                cartItems: deleteItemFromCart(state.cartItems,action.payload)
            }
            
        default:
            return state;    

    }
}

export default cartReducer