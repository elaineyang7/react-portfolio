import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__header">
            <a className="nav__logo" href="#home">Elaine Yang</a>
            <ul className="nav__links">
              <li>
                <a href="#experience">experience</a>
              </li>
              <li>
                <a href="#projects">projects</a>
              </li>
              <li>
                <a href="Elaine-Yang-Resume.pdf" className="a__spacing" download target = "_blank">resume</a>
              </li>
            </ul>
          </div>
        </div>        
      </nav>
    );
  }
}

export default Header;