import axios from "axios"
import { PRODUCT_TYPE } from "../types/productTypes"

const API_URL = "http://localhost:3000/products"

// SANS THUNK
export const requestBegin = () => {
    return {
        type: PRODUCT_TYPE.REQUEST_PRODUCTS_BEGIN
    }
}
export const requestEchec = (error) => {
    return {
        type: PRODUCT_TYPE.REQUEST_PRODUCTS_ECHEC,
        payload: error 
    }
}

export const requestSuccess = (products) => {
    return {
        type: PRODUCT_TYPE.REQUEST_PRODUCTS_SUCCESS,
        payload: products 
    }
}

// AVEC THUNK 
// une fonction qui retourne une fonction
export const fetchProductAsync = () => async (dispatch) => {
    // on passe le loading a true
    dispatch(requestBegin())
    try {
        // si l'api renvoi les produits
        const products = await axios.get(API_URL);
        dispatch(requestSuccess(products.data))
    } catch (error) {
        dispatch(requestEchec(error.message))
        
    }
}