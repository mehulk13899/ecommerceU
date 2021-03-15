import React from 'react'
import { Route, Switch, useRouteMatch } from "react-router-dom";


import App from '../../App';
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
const ShopPage = () => {

    return (
        <div className='shop-page' >
            <Route path="/shop" component={CollectionOverview} />
        </div >
    )
}


export default ShopPage;
