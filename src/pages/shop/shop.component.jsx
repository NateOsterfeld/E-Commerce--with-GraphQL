import React from 'react';
import { Route } from 'react-router-dom';

// default represents the default export from our containers which return either the Spinner component or original component with data now passed in
import { default as CollectionsOverview } from '../../components/collections-overview/collections-overview.container';
import { default as CollectionPage } from '../collection/collection.container';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} /> {/*  accepts the "/shop" route  */}
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> {/*  builds off of the "/shop" route -> "/shop/hats" for example  */}
  </div>
);

export default ShopPage;
