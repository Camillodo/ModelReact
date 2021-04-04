// == Import npm
import React from 'react';

// == Import
import hi from 'src/assets/img/hi.gif';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <img src={hi} alt="hi" />
    <h1>Hi how are you?</h1>
  </div>
);

// == Export
export default App;
