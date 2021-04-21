import React, { Component } from 'react';

import Header from './components/header/Header.jsx';
import Hero from './components/hero/Hero.components.jsx';

import './index.css';

class App extends Component{
   render(){
      return(
         <div className="portfolio">
            <Header />
            <Hero />
         </div>
      );
   }
}
export default App;
