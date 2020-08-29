import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { CHARACTER_BY_ID } from '../../services/Queries/Index';

import CharacterSeries from "../../components/CharacterSeries/Index";
import CharacterEditModal from '../../components/CharacterEditModal/Index';

import './styles.css';

type Props = React.FC<RouteComponentProps<{id: string}>>;

const CharacterPage: Props = ({match}) => {
  const characterId = match.params.id;
  const [characterName, setCharacterName] = useState("");
  const [characterImage, setCharacterImage] = useState("");
  const [characterDescription, setCharacterDescription] = useState("");
  const [showCharacterSeries, setShowCharacterSeries] = useState(false);
  const [showCharacterEditModal, setShowCharacterEditModal] = useState(false);

  
  const { error, loading, data } = useQuery(CHARACTER_BY_ID, {
    variables: {
      id: Number(characterId)
    }
  });

  useEffect(() => {
    if(data){
      const [character] = data.characters;
      const { name, description, thumbnail } = character;
  
      setCharacterName(name);
      setCharacterDescription(description);
      setCharacterImage(thumbnail);
    }
  }, [data])

  if (error) return <h2>Error fetching from data source:<br/> {error.message}</h2>;
  if (loading) return <h2>Loading Character Data...</h2>;

  

  return (
    <>
      <div className="container">
        <h1 className="pageTitle">Character Page</h1>
        <div>
          <h1 className="characterName">{characterName}</h1>
          <img className="characterImage" src={characterImage} alt={`${characterName} Thumbnail`} />
          <p className="characterDescription">
            {
              characterDescription === "" ? `No description for ${characterName}` : characterDescription
            }
          </p>
          <button className="editCharacter" onClick={() => { setShowCharacterEditModal(true) }}>
            Edit Character
          </button>
          {
            showCharacterSeries ?
              <CharacterSeries id={Number(characterId)} /> :
              <button className="loadSeries" onClick={() => { setShowCharacterSeries(true) }}>
                Load Character Series
              </button>
          }
        </div>
      </div>
      {
        showCharacterEditModal ?
          <CharacterEditModal 
            id={characterId}
            name={[characterName, setCharacterName]}
            image={[characterImage, setCharacterImage]}
            description={[characterDescription, setCharacterDescription]}
            closeModal={() => { setShowCharacterEditModal(false) }}
          /> :
          null
      }
    </>
  );
}

export default CharacterPage; 