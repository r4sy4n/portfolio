import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <>
      <div className="container sticky">
        <Navbar />
      </div>
      <main className="container">
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
