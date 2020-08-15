import React, { FormEvent } from 'react';

import { searchTerm } from '../../services/ApiClient/Index';

const CharacterSearch = () => {
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    searchTerm(value);
  }
  return (
    <>
      <p>SearchTerm is: {searchTerm()}</p>
      <input type="text" onChange={handleChange} />
    </>
  );
}

export default CharacterSearch;