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
        case CART_TYPES.ADD_PRODUCT_TO_CART: {
            // si le produit est déja présent dans le panier
            // incrementer la quantité
            const item = state.cartItems.findIndex((p) => p.id === payload.id)
            // si le produit n'était pas présent
            if(item === - 1) {
                return {
                    ...state,
                    cartItems: [...state.cartItems, {...payload, quantity: 1}],
                    cartCount: state.cartCount + 1,
                    cartTotal: state.cartTotal + payload.price,
                    isCartActive : true

                }
            } else {
                // si le produit est présent
                // copy tableau 
                const updatedItems = [...state.cartItems];
                updatedItems[item].quantity += 1 
                return {
                    ...state, 
                    cartItems: updatedItems,
                    cartCount: state.cartCount + 1,
                    cartTotal: state.cartTotal + payload.price,
                    isCartActive : true
                }

            }


            
        }
        case CART_TYPES.REMOVE_PRODUCT_FROM_CART: {
            const index = state.cartItems.findIndex((p) => p.id === payload.id)
            if(index === -1) {
                return state 
            } else {
                // cible l'élement à supprimer
                const removedItem = state.cartItems[index]
                if(removedItem.quantity > 1) {
                    const updatedItems = [...state.cartItems]
                    updatedItems[index].quantity -= 1 
                    return {
                        ...state, 
                        cartItems: updatedItems,
                        cartCount: state.cartCount - 1,
                        cartTotal: state.cartTotal - removedItem.price,
                    }
                } else {
                    return {
                        ...state, 
                        cartItems: state.cartItems.filter((p) => p.id != payload.id),
                        cartCount: state.cartCount - 1,
                        cartTotal: state.cartTotal - removedItem.price,
                    }

                }
            }
    
        }

        default : 
         return state
    }

}