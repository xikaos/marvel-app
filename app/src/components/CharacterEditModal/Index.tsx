import React, { Dispatch, SetStateAction } from 'react';

import './styles.css';

interface CharacterEditModalProps {
  closeModal: Dispatch<SetStateAction<boolean>>
}

const CharacterEditModal: React.FC<CharacterEditModalProps> = ({ closeModal }) => {
  return (
    <div className="characterEditModal">
      <div className="characterEditModalContent">
        <div className="characterNameField">
          <label htmlFor="characterNameInput">Character Name</label>
          <input type="text" id="characterNameInput" />
        </div>
        <div className="characterImageField">
          <label htmlFor="characterImageInput">Character Image (URL)</label>
          <input type="text" id="characterImageInput" />
        </div>
        <div className="characterDescriptionField">
          <label htmlFor="characterDescriptionInput">Character Description</label>
          <input type="text" id="characterDescriptionInput" />
        </div>
        <div className="characterEditButtons">
          <button className="cancelEdit">Cancel</button>
          <button className="submitEdit" onClick={closeModal}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CharacterEditModal;