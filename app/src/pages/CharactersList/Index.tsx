import React from 'react';

import CharactersList from '../../components/CharactersList/Index';
import CharacterSearch from '../../components/CharacterSearch/Index';

import './styles.css';

const Index = () => {
  return (
    <div className="container">
      <h1 className="pageTitle">Character List</h1>
      <CharacterSearch />
      <CharactersList />
    </div>
  );
}

export default Index;