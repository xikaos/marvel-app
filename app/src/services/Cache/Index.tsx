import { InMemoryCache } from "@apollo/client";

const getCharacterFromLocalStorage = (id: string) => {
  return JSON.parse(localStorage.getItem(id) as string);
}

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Character: {
      fields: {
        name: {
          read(name, cache) {
            const characterId = cache.readField("id") as string;
            const storedCharacter = getCharacterFromLocalStorage(characterId);
            return storedCharacter ? storedCharacter.name : name;
          }
        },
        thumbnail: {
          read(image, cache) {
            const characterId = cache.readField("id") as string;
            const storedCharacter = getCharacterFromLocalStorage(characterId);
            return storedCharacter ? storedCharacter.image : image;
          }
        },
        description: {
          read(description, cache) {
            const characterId = cache.readField("id") as string;
            const storedCharacter = getCharacterFromLocalStorage(characterId);
            return storedCharacter ? storedCharacter.description : description;
          }
        }
      }
    },
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