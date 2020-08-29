import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

export type CharacterAttributes = {
  id: string,
  name: string,
  thumbnail: string,
  description: string
}

type Props = React.FC<Omit<CharacterAttributes, "description" >> 

const CharacterListItem: Props = ({ id, name, thumbnail }) => {
  return (
    <Link to={`/characters/${id}`} className="characterPageLink">
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