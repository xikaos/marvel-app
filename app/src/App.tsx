import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { ApiClient } from './services/ApiClient/Index';

import Routes from './routes'

import './assets/styles/global.css';

function App() {
  return (
    <ApolloProvider client={ApiClient}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;