import React, { Component } from 'react';

import Header from './components/header/Header.jsx';
import Hero from './components/hero/Hero.components.jsx';
import Experience from './components/experience/experience.jsx';
import Projects from './components/projects/projects.jsx';
import Footer from './components/footer/footer.jsx';

import './index.css';

class App extends Component {
  render(){
    return(
      <div className="portfolio">
        <Header />
        <Hero />
        <Experience />
        <Projects />
        <Footer />
      </div>
    );
  }
}
export default App;
