import { createSelector } from 'reselect'

export const selectCart = state => state.cart;

export const selectCartItem = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)



export const selectCartItemCount = createSelector(
    [selectCartItem],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)


export const selectCartTotalPrice = createSelector(
    [selectCartItem],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)

)
