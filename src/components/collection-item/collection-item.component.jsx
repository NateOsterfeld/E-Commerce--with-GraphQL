import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

import './collection-item.styles.scss';

const ADD_ITEM_TO_CART = gql`
    mutation AddItemToCart($item: Item!) {
        addItemToCart(item: $item) @client
    }
`

const CollectionItem = ({ item }) => {
  const [addItemToCart, {data}] = useMutation(ADD_ITEM_TO_CART)
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      {/* IMPORTANT: Make sure to pass in variables (which takes an object) and give it the value you want to pass in (in this case our item object) */}
      <CustomButton onClick={() => addItemToCart({variables: { item } })} inverted> 
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem
