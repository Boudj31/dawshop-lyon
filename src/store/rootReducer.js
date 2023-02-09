import { combineReducers } from "redux";
import { CartReducer } from "./reducers/CartReducer";
import { ProductReducer } from "./reducers/ProductReducer";

export const rootReducer = combineReducers({
    // tous les reducers seront déclarés ici 
    product : ProductReducer,
    cart: CartReducer
})