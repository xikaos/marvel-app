import React, { useState, Dispatch, SetStateAction } from 'react';

import './styles.css';

type State = [string, React.Dispatch<React.SetStateAction<string>>];

type Props = {
  id: string,
  name: State,
  image: State,
  description: State,
  closeModal: Function
}

const CharacterEditModal: React.FC<Props> = ({ closeModal, id, name, image, description }) => {
  const [characterName, setCharacterName] = name;
  const [characterImage, setCharacterImage] = image;
  const [characterDescription, setCharacterDescription] = description;

  const clickHandler = () => {
    editCharacterAttributes();
    return closeModal();
  }

  const editCharacterAttributes = () => {
    localStorage.setItem(id.toString(), JSON.stringify({
      name: characterName,
      image: characterImage,
      description: characterDescription
    }));
  }

  return (
    <div className="characterEditModal">
      <div className="characterEditModalContent">
        <div className="characterNameField">
          <label htmlFor="characterNameInput">Character Name</label>
          <input
            type="text"
            id="characterNameInput"
            value={characterName}
            onChange={event => setCharacterName(event.target.value)}
          />
        </div>
        <div className="characterImageField">
          <label htmlFor="characterImageInput">Character Image (URL)</label>
          <input
            type="text"
            id="characterImageInput"
            value={characterImage}
            onChange={event => setCharacterImage(event.target.value)}
          />
        </div>
        <div className="characterDescriptionField">
          <label htmlFor="characterDescriptionInput">Character Description</label>
          <input
            type="text"
            id="characterDescriptionInput"
            value={characterDescription}
            onChange={event => setCharacterDescription(event.target.value)}
          />
        </div>
        <div className="characterEditButtons">
          <button className="cancelEdit" onClick={() => { closeModal() }}>Cancel</button>
          <button className="submitEdit" onClick={clickHandler}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CharacterEditModal;