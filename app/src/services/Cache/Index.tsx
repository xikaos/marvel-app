import { InMemoryCache } from "@apollo/client";

const characterPlaceholder = {name: 'Loading...', 'thumbnail': ""};

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          read(existing, {readField}){
            return existing === undefined ? { characters: Array(20).fill(characterPlaceholder) } : existing;
          } 
        },
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