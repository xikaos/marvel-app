import React, { FormEvent } from 'react';

import { useDebouncedCallback } from 'use-debounce';

import { searchTerm } from '../../services/Cache/Index';

import './styles.css';

const CharacterSearch = () => {

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
  }

  const [setSearchTerm] = useDebouncedCallback((value: string) => {
    searchTerm(value);
  },
    500
  );

  return (
    <>
    <div className="searchField">
      <label htmlFor="searchInput" defaultValue="Spider Man">Character Name</label>
      <input type="text" onChange={handleChange} id="searchInput"/>
    </div>
    </>
  );
}

export default CharacterSearch;