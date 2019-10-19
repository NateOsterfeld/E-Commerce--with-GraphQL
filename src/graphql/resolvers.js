import { gql } from 'apollo-boost'

// defines type (Query or Mutation) and the schema of the request (ToggleCartHidden would be the __typename)
// NOTE: Setting the client-side schema is can be used for introspection in Apollo Client Devtools (where you can explore your schema in GraphiQL)
export const typeDefs = gql`
	extend type Mutation {
		ToggleCartHidden: Boolean!
	}
`

// use "client directive (@client)" to specify to Apollo that this request is using "local/client cache" (not backend)
const GET_CART_HIDDEN = gql`
	{
		cartHidden @client
	}
`


export const resolvers = {
	Mutation: {
		// used in cart-icon.container - retrieves 'cartHidden' from client cache -> write to cache inverted/toggled value
		toggleCartHidden: (_root, _args, { cache }, _info) => {
            const { cartHidden } = cache.readQuery({
                query: GET_CART_HIDDEN,
            })

            cache.writeQuery({
                query: GET_CART_HIDDEN,
                data: { cartHidden: !cartHidden }  // similar to setState syntax where we are just changing the key value of the state/data object property
            })

			// still need to use '!' here because the value hasn't actually changed (only for the 'cartHidden' inside our cache on the 'data' object)
            return !cartHidden
		},
	},
}
