import React, { Component } from 'react'
import SHOP_DATA from "./shop.data";

import Preview_Collection from '../../components/preview-collection/preview-collection-component'
class ShopPage extends Component {

    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
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
}

export default ShopPage;