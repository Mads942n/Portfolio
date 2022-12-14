import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header />
      <Nav />
      <Portfolio />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>

  );
}

export default App;
