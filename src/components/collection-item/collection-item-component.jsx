import React from 'react'
import ButtonComponent from '../button-component/button-component'
import "./collection-item.styles.scss";

import { addItemToCart } from '../../redux/cart/cart-actions';

import { connect } from 'react-redux'

function CollectionItem({ addItemToCart, item }) {
    const { id, imageUrl, name, price } = item;
    return (
        <div className='collection-item '>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <ButtonComponent onClick={() => addItemToCart(item)} inverted>Add to Cart</ButtonComponent>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
