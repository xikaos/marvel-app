import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

export interface CharacterAttributes {
  id?: string,
  name: string,
  thumbnail: string,
  description?: string
}

const CharacterListItem: React.FC<CharacterAttributes> = ({ id, name, thumbnail }) => {
  return (
    <Link to={`/characters/${id}`}>
      <div className="characterListItem">
        <div className="characterThumbnail">
          <img src={thumbnail} alt="" className="characterThumbnailImage"/>
        </div>
        <div className="characterInfo">
          <p className="characterName">{name}</p>
        </div>
      </div>
    </Link>
  );
}

export default CharacterListItem;