import React from 'react';

import CharactersList from '../../components/CharactersList/Index';

import './styles.css';

const Index = () => {
  return (
    <div className="container">
      <h1 className="pageTitle">Character List</h1>
      <CharactersList />
    </div>
  );
}

export default Index;