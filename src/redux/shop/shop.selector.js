import { createSelector } from "reselect";

const selectshopstate = state => state.shop;

export const selectshop = createSelector(
    [selectshopstate],
    shop => shop.shopdata    
)

export const selectshopPreview = createSelector(
    [selectshop],
    shop => Object.keys(shop).map(key => shop[key]) 
)

export const selectCollection = collectionUrlparam => createSelector(
    [selectshop],
    shop => shop[collectionUrlparam]
)
