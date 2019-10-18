import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import CollectionsOverview from './collections-overview.component'
import Spinner from '../spinner/spinner.component'

const GET_COLLECTIONS = gql`
    {
        collections {
            id,
            title,
            items {
                id,
                name,
                price,
                imageUrl
            }
        }
    }
`

const CollectionsOverviewContainer = () => (
    /* returns function with many useful properties but we only need 'loading' and 'data' for now */
    <Query query={GET_COLLECTIONS}> 
        {
            ({ loading, data }) => {
                if (loading) return <Spinner />
                return <CollectionsOverview collections={data.collections} /> // will always be "data.something" (in this case "data.collections")
            }
        }
    </Query>
)

export default CollectionsOverviewContainer
