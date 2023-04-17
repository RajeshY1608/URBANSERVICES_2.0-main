import { ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST } from "../ActionType";

export const addToWishlist = data =>({
    type: ADD_TO_WISHLIST,
    payload: data,
});
export const removeToWishlist = index =>({
    type: REMOVE_FROM_WISHLIST,
    payload: index,
});