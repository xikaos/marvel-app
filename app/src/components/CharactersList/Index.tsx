import React from 'react';

import { useQuery } from '@apollo/client';

import CharacterListItem, { CharacterAttributes } from '../CharacterListItem/Index';

import { searchTerm } from '../../services/Cache/Index';
import { FIRST_CHARACTERS, SPECIFIC_CHARACTERS } from '../../services/Queries/Index';

import './styles.css';

const CharactersList = () => {
  const CHARACTERS_QUERY = searchTerm() === "" ? FIRST_CHARACTERS : SPECIFIC_CHARACTERS;

  const { loading, error, data } = useQuery(CHARACTERS_QUERY, {
     variables: { searchTerm: searchTerm() }
  });

  const searchHasNoResults = () => {
    return data.characters && data.characters.length === 0;
  }
  
  if (error) return <h3 className="error">Error fetching from data source.</h3>;
  if (loading) return <h2 className="loading">Loading...</h2>;
 if (searchHasNoResults()) return <h3 className="noResults">No results for {searchTerm()}.</h3>

  return (
      <div className="characterList">
        {data.characters.map(
            (character: CharacterAttributes) => {
              return <CharacterListItem 
                key={character.id}
                name={character.name}
                thumbnail={character.thumbnail}
              />
            }
          )
        }
      </div>
  );
}

export default CharactersList;