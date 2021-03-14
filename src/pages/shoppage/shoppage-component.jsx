import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { shopItemSelect } from '../../redux/shop/shop.selector'
import Preview_Collection from '../../components/preview-collection/preview-collection-component'
const ShopPage = ({ collections }) => {
    return (
        <div className='shop-page' >
            {
                collections.map(({ id, ...otherCollectionData }) => {
                    return <Preview_Collection key={id} {...otherCollectionData}></Preview_Collection>
                })
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: shopItemSelect
})

export default connect(mapStateToProps, null)(ShopPage);