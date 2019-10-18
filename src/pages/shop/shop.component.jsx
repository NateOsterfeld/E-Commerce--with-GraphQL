import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} /> {/*  accepts the "/shop" route  */}
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> {/*  builds off of the "/shop" route -> "/shop/hats" for example  */}
  </div>
);

export default ShopPage;
