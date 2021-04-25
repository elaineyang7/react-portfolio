import React, { Component } from 'react';

import Header from './components/header/Header.jsx';
import Hero from './components/hero/Hero.components.jsx';
import Experience from './components/experience/experience.jsx';

import './index.css';

class App extends Component{
  render(){
    return(
      <div className="portfolio">
        <Header />
        <Hero />
        <Experience />

        <button onClick={() => this.helloThere()}>Speak</button>
      </div>
    );
  }
}
export default App;
