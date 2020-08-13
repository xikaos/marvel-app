import React from 'react';

import './styles.css';

export interface CharacterAttributes {
  name: string,
  thumbnail: string
}

const CharacterListItem: React.FC<CharacterAttributes> = ({ name, thumbnail }) => {
  return (
    <div className="characterListItem">
      <div className="characterThumbnail">
        <img src={thumbnail} alt="" className="characterThumbnailImage"/>
      </div>
      <div className="characterInfo">
        <p className="characterName">{name}</p>
      </div>
    </div>
  );
}

export default CharacterListItem;