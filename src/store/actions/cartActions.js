import { CART_TYPES } from "../types/cartTypes"

export const toogleCart = () => {
    return {
        type: CART_TYPES.TOOGLE_CART
    }
}