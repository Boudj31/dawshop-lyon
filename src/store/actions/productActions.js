import { PRODUCT_TYPE } from "../types/productTypes"


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