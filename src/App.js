import './App.css';
import Header from './Components/Header/Header';
import Stacks from './Components/Stacks/Stacks';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Stacks />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
