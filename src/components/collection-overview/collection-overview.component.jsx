import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { collectionSelectForPreview } from '../../redux/shop/shop.selector'
import './collection-overview.scss';
import Preview_Collection from '../../components/preview-collection/preview-collection-component'


const CollectionOverview = ({ collections }) => {
    return (
        <div className='collection-overview'>
            {
                collections.map(({ id, ...otherCollectionData }) => {
                    return <Preview_Collection key={id} {...otherCollectionData}></Preview_Collection>
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: collectionSelectForPreview
})

export default connect(mapStateToProps, null)(CollectionOverview);


