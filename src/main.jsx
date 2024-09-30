import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter } from "react-router-dom"
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: "https://eu-west-2.cdn.hygraph.com/content/cm1o35tok03xd07w77cizk629/master",
    cache: new InMemoryCache()
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
           <BrowserRouter>
                   <ApolloProvider client={client}>
                              <App />
                   </ApolloProvider>
           </BrowserRouter>
  </React.StrictMode>,
)
