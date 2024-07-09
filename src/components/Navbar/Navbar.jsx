import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'; // فایل استایل‌های CSS

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar bg-customBlack w-screen">
      <div className="navbar-container gap-4 flex ">
        <button class="pushable">
          <span class="front">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          </span>
        </button>
        <button class="pushable">
          <span class="front">

            <Link to="/characters" className={`nav-link ${location.pathname === '/characters' ? 'active' : ''}`}>Characters</Link>
          </span>
        </button>
        <button class="pushable">
          <span class="front">
            <Link to="/episodes" className={`nav-link ${location.pathname === '/episodes' ? 'active' : ''}`}>Episodes</Link>
          </span>
        </button>
        <button class="pushable">
          <span class="front">
            <Link to="/locations" className={`nav-link ${location.pathname === '/locations' ? 'active' : ''}`}>Locations</Link>
          </span>
        </button>
        <div className="w-full flex justify-center rick">
          <h1 className="">API RICK AND MORTY</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
