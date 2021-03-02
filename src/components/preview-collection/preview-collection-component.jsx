import React from 'react'
import './preview-collection.styles.scss'
import CollectionItem from "../collection-item/collection-item-component";

const Preview_Collection = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {
                    items.filter((item, idx) => idx < 4)
                        .map(({ id, ...otherItemData }) => (
                            <CollectionItem key={id} {...otherItemData}></CollectionItem>
                        ))
                }
            </div>
        </div>
    )
}

export default Preview_Collection;