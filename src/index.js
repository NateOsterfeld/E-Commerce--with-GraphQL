import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient, /* gql */ } from 'apollo-boost'
import { resolvers, typeDefs } from './graphql/resolvers'
import { store, persistor } from './redux/store'
import './index.css'
import App from './App'

const httpLink = createHttpLink({
	uri: 'https://crwn-clothing.com', // links to our GraphQL playground that has the schema
})

const cache = new InMemoryCache() // instance of a class that is sort of like a top level reducer that we use to store the data of our application

const client = new ApolloClient({ // also used as an instance of a class that is our actual client with the config properties we give it
  link: httpLink,
  cache,
  typeDefs,
  resolvers,
})

client.writeData({
  data: {
	cartHidden: true,
	cartItems: [],
	itemCount: 0
  }
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<BrowserRouter>
				<PersistGate persistor={persistor}>
					<App />
				</PersistGate>
			</BrowserRouter>
		</Provider>
	</ApolloProvider>,

	document.getElementById('root'),
)
