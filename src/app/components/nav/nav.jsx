import React from 'react';
import "./nav.scss";
const Nav = () => {
  return (
    <nav>
      <ul className="nav nav-tabs justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="#skills">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#future">
            Future
          </a>
        </li>
        
      </ul>
    </nav>
  );
};

export default Nav;
