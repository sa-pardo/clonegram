import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloLink, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { onError } from '@apollo/client/link/error'
import Context from './Context'

import { App } from './App'

const httpLink = new HttpLink({
  uri: 'https://clonegram-server.vercel.app/graphql'
})

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = window.sessionStorage.getItem('token')
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }))
  return forward(operation)
})

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location.href = '/'
  }
})

const client = new ApolloClient({
  link: from([authMiddleware, errorMiddleware, httpLink]),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Context.Provider>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </Context.Provider>
  , document.getElementById('root'))
