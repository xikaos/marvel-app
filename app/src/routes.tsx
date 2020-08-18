import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
                                                                                                                                                                                                                                                                                                                                                                             
import CharacterList from './pages/CharactersList/Index';
import CharacterPage from './pages/CharacterPage/Index';

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={CharacterList}/>
      <Route path="/characters/:id" component={CharacterPage}/>
    </Router>
  );
}

export default Routes;
