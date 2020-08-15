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
  
  if (error) return <h2>Error fetching from data source.</h2>;
  if (loading) return <h2>Loading...</h2>;

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