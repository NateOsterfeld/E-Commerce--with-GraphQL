import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const TOGGLE_CART_HIDDEN = gql`
	mutation ToggleCartHidden {
		toggleCartHidden @client
	}
`

// const CartIcon = ({ toggleCartHidden, itemCount }) => {
const CartIcon = ({ itemCount }) => {
	const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN)

	return (
		<div className='cart-icon' onClick={() => toggleCartHidden()}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{itemCount}</span>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
})

export default connect(mapStateToProps)(CartIcon)
