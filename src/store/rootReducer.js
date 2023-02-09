import { combineReducers } from "redux";
import { ProductReducer } from "./reducers/ProductReducer";

export const rootReducer = combineReducers({
    // tous les reducers seront déclarés ici 
    product : ProductReducer,
})