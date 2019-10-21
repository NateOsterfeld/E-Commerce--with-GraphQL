import { gql } from 'apollo-boost'
import { _addItemToCart } from './cart.utils'

// typeDefs let us add to our graphQL server schema - also the Mutation/Query types are exactly the same as any other object type
export const typeDefs = gql`
	extend type Item {
		quantity: Int
	}

	extend type Mutation {
		ToggleCartHidden: Boolean!
		AddItemToCart(item: Item!): [Item]!
	}
`

// use "client directive (@client)" to specify to Apollo that this request is using "local/client cache" (not backend)
const GET_CART_HIDDEN = gql`
	{
		cartHidden @client
	}
`

const GET_CART_ITEMS = gql`
	{
		cartItems @client
		itemCount @client
	}
`


export const resolvers = {
	Mutation: {
		// retrieves 'cartHidden' from client cache using 'GET_CART_HIDDEN' query -> writes to cache inverted/toggled value
		toggleCartHidden: (_root, _args, { cache }, _info) => {
            const { cartHidden } = cache.readQuery({
                query: GET_CART_HIDDEN,
			})
			
            cache.writeQuery({
                query: GET_CART_HIDDEN,
                data: { cartHidden: !cartHidden }  // similar to setState syntax where we are just changing the key value of the state/data object property
            })

            return !cartHidden
		},

		// destructuring off the item object we passed in from 'collection-item' to the object that variables naturally takes
		addItemToCart: (_root, { item }, { cache }, _info) => {
			const { cartItems, itemCount } = cache.readQuery({
				query: GET_CART_ITEMS
			})

			const newCartItems = _addItemToCart(cartItems, item)

			cache.writeQuery({
				query: GET_CART_ITEMS,
				data: { 
					cartItems: newCartItems,
					itemCount: itemCount + 1
				 }
			})

			return newCartItems
		}
	},
}
