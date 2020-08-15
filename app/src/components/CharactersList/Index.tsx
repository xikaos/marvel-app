import React from 'react';

import { gql, useQuery } from '@apollo/client';

import CharacterListItem, { CharacterAttributes } from '../CharacterListItem/Index';

import { searchTerm } from '../../services/ApiClient/Index';

import './styles.css';

const CharactersList = () => {
  const SPECIFIC_CHARACTERS = gql`
    query Characters($searchTerm : String!) {
      characters(where: {nameStartsWith: $searchTerm}) {
        id
        name
        thumbnail
      }
      searchTerm @client
    }
  `;

  const FIRST_CHARACTERS = gql`
    query {
      characters {
        id
        name
        thumbnail
      }
      searchTerm @client
    }`;

  const CHARACTERS_QUERY = searchTerm() === "" ? FIRST_CHARACTERS : SPECIFIC_CHARACTERS;

  const CHARACTER_PLACEHOLDER = { name: 'Loading Character...', thumbnail: ""};

  const { loading, error, data } = useQuery(
    CHARACTERS_QUERY, 
    {
      variables: {
        searchTerm: searchTerm() 
      }
  });

  const characters = loading ? Array(16).fill(CHARACTER_PLACEHOLDER) : data.characters || [] ;

  return (
    <>
      <div className="characterList">
        {characters.map(
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
    </>
  );
}

export default CharactersList;