import { ApolloClient, InMemoryCache } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        searchTerm: {
          read() {
            return searchTerm();
          }
        }
      }
    }
  }
});

export const searchTerm = cache.makeVar("");

export const ApiClient = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache
});