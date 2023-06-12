import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';

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
      </main>
    </>
  );
}

export default App;
