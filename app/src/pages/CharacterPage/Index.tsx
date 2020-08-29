import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { CHARACTER_BY_ID } from '../../services/Queries/Index';

import CharacterSeries from "../../components/CharacterSeries/Index";
import CharacterEditModal from '../../components/CharacterEditModal/Index';

import './styles.css';

interface CharacterPageParams {
  id: string
}

const CharacterPage: React.FC<RouteComponentProps<CharacterPageParams>> = ({match}) => {
  const [showCharacterSeries, setShowCharacterSeries] = useState(false);
  const [showCharacterEditModal, setShowCharacterEditModal] = useState(false);
  const { id } = match.params;

  const { error, loading, data } = useQuery(CHARACTER_BY_ID, {
    variables: {
      id: Number(id)
    }
  });

  if (error) return <h2>Error fetching from data source:<br/> {error.message}</h2>;
  if (loading) return <h2>Loading Character Data...</h2>;

  const [character] = data.characters;
  const { name, description, thumbnail } = character;

  return (
    <>
      <div className="container">
        <h1 className="pageTitle">Character Page</h1>
        <div>
          <h1 className="characterName">{name}</h1>
          <img className="characterImage" src={thumbnail} alt={`${name} Thumbnail`} />
          <p className="characterDescription">
            {
              description === "" ? `No description for ${name}` : description
            }
          </p>
          <button className="editCharacter" onClick={() => { setShowCharacterEditModal(true) }}>
            Edit Character
          </button>
          {
            showCharacterSeries ?
              <CharacterSeries id={Number(id)} /> :
              <button className="loadSeries" onClick={() => { setShowCharacterSeries(true) }}>
                Load Character Series
              </button>
          }
        </div>
      </div>
      {
        showCharacterEditModal ?
          <CharacterEditModal closeModal={() => { setShowCharacterEditModal }} /> :
          null
      }
    </>
  );
}

export default CharacterPage; 