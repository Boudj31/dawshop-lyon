import { PRODUCT_TYPE } from "../types/productTypes"

const initialState = {
    products: [],
    loading: false,
    error: ''
}

export const ProductReducer = (state = initialState, action) => {
    const {type, payload} = action 

    switch(type) {

        case PRODUCT_TYPE.REQUEST_PRODUCTS_BEGIN:
        return {
            ...state,
            loading : true
        }
        case PRODUCT_TYPE.REQUEST_PRODUCTS_SUCCESS :
        return {
            ...state,
            products : payload,
            loading : false
        }

        case PRODUCT_TYPE.REQUEST_PRODUCTS_ECHEC:
        return {
            ...state,
            error: payload,
            loading : false
        }

        default : 
        return state
    }


}