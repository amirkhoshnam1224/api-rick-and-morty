import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../../src/logo.svg'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <img src={logo}></img>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/episodes">Episodes</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
