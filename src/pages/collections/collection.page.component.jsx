import React from 'react'
import './collection.page.scss'
import { connect } from 'react-redux'
import { shopItemSelectCollectionPage } from '../../redux/shop/shop.selector'

import CollectionItem from '../../components/collection-item/collection-item-component'
const CollectionPage = ({ collections }) => {
    const { title, items } = collections;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items
                        .map(collection => (
                            <CollectionItem key={collection.id} item={collection}></CollectionItem>
                        ))
                }
            </div>

        </div>
    )
}

const mapStateToProps = (state, ownProps) => (
    {
        collections: shopItemSelectCollectionPage(ownProps.match.params.id)(state)
    })
export default connect(mapStateToProps, null)(CollectionPage);
