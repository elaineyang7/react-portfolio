import React from 'react';

import OverlayMenu from '../overlay-menu/OverlayMenu.jsx';
import MenuButton from '../menu-button/MenuButton.jsx';

import './Header.scss';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__header">
          <a className="nav__logo" href="#home">Elaine Yang</a>
          <div ref={node}>
            <MenuButton open={open} setOpen={setOpen} />
            <OverlayMenu open={open} setOpen={setOpen} />
          </div>
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

export default Header;