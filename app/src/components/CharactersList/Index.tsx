import React, { useState, useEffect } from 'react';

import CharacterListItem, { CharacterAttributes } from '../CharacterListItem/Index';

import './styles.css';

const CharactersList = () => {
  const [charactersList, setCharacters] = useState([]);

  useEffect(() => {
    const characters = getCharacters()
    .then((characterData) => {
      setCharacters(characterData.data.characters);
    })
  });

  const getCharacters = async (query = "{ characters {name, thumbnail} }") => {
    const apiEndpoint = 'http://localhost:4000';

    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        query
      })
    })

    return await response.json();
  }

  return (
    <div className="characterList">
      { charactersList.map(
          (character: CharacterAttributes) => {
            return <CharacterListItem 
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