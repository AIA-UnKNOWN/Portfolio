import './style.css';
import Header from '../Components/Header';
import Stacks from '../Components/Stacks';
import Projects from '../Components/Projects';
import Testimonials from '../Components/Testimonials';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

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
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
