import React, { FormEvent } from 'react';

import { useDebouncedCallback } from 'use-debounce';

import { searchTerm } from '../../services/Cache/Index';

const CharacterSearch = () => {

  const [setSearchTerm] = useDebouncedCallback((value: string) => {
    searchTerm(value);
  },
    500
  );

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
  }

  /* useDebouncedCallback((value) => {
    debugger;
  },
    500
  ); */

  return (
    <input type="text" onChange={handleChange} />
  );
}

export default CharacterSearch;