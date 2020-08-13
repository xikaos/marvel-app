import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CharacterList from './pages/CharactersList/Index';

// Porque usar a declaração padrão ES?? em vez de uma arrow function?
const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={CharacterList}/>
    </Router>
  );
}

export default Routes;
