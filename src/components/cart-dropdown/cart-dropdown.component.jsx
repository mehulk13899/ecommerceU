import React from 'react'
import ButtonComponent from '../button-component/button-component'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItem } from '../../redux/cart/cart-selector';
import { withRouter } from 'react-router-dom'
import './cart-dropdown.styles.scss'
import { toggleCartHidden } from '../../redux/cart/cart-actions'
const CartDropDown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items '>
                {
                    cartItems.length ?
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.key} item={cartItem}></CartItem>
                        )) :
                        <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <ButtonComponent onClick={
                () => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }
            }> Go To Checkout</ButtonComponent>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem
})

export default withRouter(connect(mapStateToProps)(CartDropDown));
