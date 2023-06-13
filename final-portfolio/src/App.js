import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import FeaturedProjects from './components/FeaturedProjects';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div className="container sticky">
        <Navbar />
      </div>
      <main className="container">
        <Hero />
        <About />
        <Services />
        <CallToAction />
        <FeaturedProjects />
        <Projects />
      </main>
    </>
  );
}

export default App;
