import React from 'react';
import styled from "styled-components";

import './OverlayMenu.scss';

const StyledMenu = styled.nav`
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`

const OverlayMenu = ({ open, setOpen }) => {
  return (
    <StyledMenu className="overlay-menu" open={open}>
      <ul className="overlay-menu__links">
        <li>
          <a 
            href="#experience" 
            open={open} 
            onClick={() => setOpen(!open)}
          >
            experience
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            open={open} 
            onClick={() => setOpen(!open)}
          >
            projects
          </a>
        </li>
        <li>
          <a 
            href="Elaine-Yang-Resume.pdf" 
            download target = "_blank" 
            open={open} 
            onClick={() => setOpen(!open)}
          >
            resume
          </a>
        </li>
      </ul>
    </StyledMenu>
  )
}

export default OverlayMenu;