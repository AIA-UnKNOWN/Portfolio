import './App.css';
import Header from './Components/Header/Header';
import Stacks from './Components/Stacks/Stacks';
import Projects from './Components/Projects/Projects';

import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Stacks />
      <Projects />
    </div>
  );
}

export default App;
