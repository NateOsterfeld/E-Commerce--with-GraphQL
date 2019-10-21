import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'
import './cart-dropdown.styles.scss';

const GET_CART_ITEMS = gql`
	{
		cartItems @client
	}
`
const TOGGLE_CART_HIDDEN = gql`
	mutation ToggleCartHidden {
		toggleCartHidden @client
	}
`

const CartDropdown = ({ history }) => {
  const { data: { cartItems }, loading, error } = useQuery(GET_CART_ITEMS)
  const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN)
  
  return (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        toggleCartHidden()
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
)};

export default withRouter(CartDropdown)
