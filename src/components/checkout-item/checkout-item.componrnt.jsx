import React from 'react'
import './checkout-item.componrnt.scss'
import { clearItemFromCart, addItemToCart, removeItemToCart } from '../../redux/cart/cart-actions'
import { connect } from 'react-redux'

const CheckoutItem = ({ cartItem, clearItemFromCart, addItemToCart, removeItemToCart }) => {
    console.log(cartItem);
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={cartItem.imageUrl}></img>
            </div>
            <span className='name'>{cartItem.name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItemToCart(cartItem)}>&#10094;</div>
                <span className='value'>{cartItem.quantity}</span>
                <div className='arrow' onClick={() => addItemToCart(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>${cartItem.price}</span>
            <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemToCart: item => dispatch(removeItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);