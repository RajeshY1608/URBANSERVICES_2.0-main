import { ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST } from "../ActionType";


export const Reducers = (state = [], action)=>{
    switch(action.type){
        case ADD_TO_WISHLIST:
        return[...state,action.payload];

    case REMOVE_FROM_WISHLIST:
        const deleteArray = state.filter((item,index)=>{
            return index !==action.payload;
        });

        return deleteArray;
    default:
        return state;
    }
}