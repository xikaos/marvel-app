import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CharacterList from './pages/CharactersList/Index';

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={CharacterList}/>
    </Router>
  );
}

export default Routes;
