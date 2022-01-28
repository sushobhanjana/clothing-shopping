import { createSelector } from "reselect";

const selectshopstate = state => state.shop;

const selectshop = createSelector(
    [selectshopstate],
    shop => shop.shopdata    
)

export default selectshop;