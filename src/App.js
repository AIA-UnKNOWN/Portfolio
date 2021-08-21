import './App.css';
import Header from './Components/Header/Header';
import Stacks from './Components/Stacks/Stacks';

import React, { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Stacks />
    </div>
  );
}

export default App;
