import { CART_TYPES } from "../types/cartTypes"

const initialState = {
    // liste de produits dans le panier
    cartItems: [],
    // nb total d'éléments
    cartCount: 0,
    // prix total des produits
    cartTotal: 0,
    // affichage du panier
    isCartActive: false
}

export const CartReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case CART_TYPES.TOOGLE_CART: {
            return {
                ...state, 
                isCartActive : !state.isCartActive
            }
        }

        default : 
         return state
    }

}