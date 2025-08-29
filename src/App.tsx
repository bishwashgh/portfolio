import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';

import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Experience />

        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;