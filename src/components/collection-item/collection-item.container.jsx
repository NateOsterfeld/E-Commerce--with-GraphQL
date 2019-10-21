// import React from 'react'
// import { Mutation } from 'react-apollo'
// import { gql } from 'apollo-boost'
// import CollectionItem from './collection-item.component'

// const ADD_ITEM_TO_CART = gql`
//     mutation AddItemToCart($item: Item!) {
//         addItemToCart(item: $item) @client
//     }
// `
// allows us to dynamically pass variables - no longer have to pass it in when we instantiate the mutation
// because variables is automatically part of the 'Mutation/Query' object, we're using a shorthand way to just use it where we need it
// const CollectionItemContainer = props => (
//     <Mutation mutation={ADD_ITEM_TO_CART}>
//         {
//             addItemToCart => {
//                 console.log('addItemToCart-collection-item.container', addItemToCart)
//                 return <CollectionItem addItem={item => addItemToCart({ variables: { item } })} {...props} />
//             }
//         }
//     </Mutation>
// )
 

// export default CollectionItemContainer

