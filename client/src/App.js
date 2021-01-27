import './App.css';
import React from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import AuthorNew from './views/AuthorNew';
import AuthorEdit from './views/AuthorEdit';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path='/'/>
        <AuthorNew path='/new'/>
        <AuthorEdit path='/edit/:id'/>
      </Router>
    </div>
  );
}

export default App;
