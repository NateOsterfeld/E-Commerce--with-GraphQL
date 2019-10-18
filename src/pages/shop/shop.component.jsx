import React from 'react';
import { Route } from 'react-router-dom';

// to keep the name "CollectionsOverview" we can import default which refers to our "CollectionsOverviewContainer"
// we could also just import it as "CollectionsOverview" but this way is more explicit as to what's going on
import { default as CollectionsOverview } from '../../components/collections-overview/collections-overview.container';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} /> {/*  accepts the "/shop" route  */}
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> {/*  builds off of the "/shop" route -> "/shop/hats" for example  */}
  </div>
);

export default ShopPage;
