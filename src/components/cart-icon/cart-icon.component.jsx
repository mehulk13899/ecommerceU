import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart-actions'
import './cart-icon.styles.scss'
import { connect } from 'react-redux'
import { selectCartItemCount } from '../../redux/cart/cart-selector'
import { createStructuredSelector } from 'reselect'
const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'></ShoppingIcon>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
