import CartActionType from './cart-types'
import { addItemToCartU, removeItemToCartU } from './cart-utils';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionType.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionType.ADD_ITEM_CART:
            return {
                ...state,
                cartItems: addItemToCartU(state.cartItems, action.payload)
            }
        case CartActionType.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case CartActionType.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeItemToCartU(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default CartReducer;