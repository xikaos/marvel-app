import { ApolloClient } from '@apollo/client';
import { cache } from '../Cache/Index';

export const ApiClient = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache
});