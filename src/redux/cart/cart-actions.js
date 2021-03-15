import CartActionType from './cart-types'

export const toggleCartHidden = () => ({
    type: CartActionType.TOGGLE_CART_DROPDOWN
});

export const addItemToCart = item => ({
    type: CartActionType.ADD_ITEM_CART,
    payload: item
})

export const removeItemToCart = item => ({
    type: CartActionType.REMOVE_CART_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CartActionType.CLEAR_CART_ITEM,
    payload: item
})


