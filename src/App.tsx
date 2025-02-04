import { FC } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Hobbies from './components/Hobbies/Hobbies';
import Education from './components/Formation/Formation';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Hobbies />
        <Education />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;