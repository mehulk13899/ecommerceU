import React from 'react'
import { connect, ReactReduxContext } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.componrnt'
import { selectCartItem, selectCartTotalPrice } from '../../redux/cart/cart-selector'
import './checkoutpage.component.scss'
const CheckoutPage = ({ cartItems, Total }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block '>
                    <span>Product</span>
                </div>
                <div className='header-block '>
                    <span>Descriptions</span>
                </div>
                <div className='header-block '>
                    <span>Quantity</span>
                </div>
                <div className='header-block '>
                    <span>Prices</span>
                </div>
                <div className='header-block '>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>)
            }
            <div className='total'>
                <span>Total:${Total}</span>
            </div>
            <StripeCheckout price={Total}></StripeCheckout>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    Total: selectCartTotalPrice
})



export default connect(mapStateToProps, null)(CheckoutPage);