import './App.css';
import Header from './Components/Header/Header';
import Stacks from './Components/Stacks/Stacks';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import { useEffect } from 'react';


function App() {

  useEffect(() => {
    const app = document.querySelector('.App');

    window.addEventListener('scroll' , function() {
      app.style.backgroundPositionY = `${-window.scrollY * 0.1}px`;
    });
  }, []);

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
