import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'; // فایل استایل‌های CSS
import shopLogo from './online-shop-shopping-cart-svgrepo-com.svg'
import { ShopContext } from '../../ContextApi/Context';

const Navbar = () => {
  const { clickCounts } = useContext(ShopContext);
  const location = useLocation();

  const totalClicks = Object.values(clickCounts).reduce((sum, count) => sum + count, 0);

  return (
    <nav className="navbar bg-customBlack w-screen flex justify-evenly">

      <div className="navbar-container gap-4 flex">
        <button className="pushable">
          <span className="front">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          </span>
        </button>
        <button className="pushable">
          <span className="front">
            <Link to="/characters" className={`nav-link ${location.pathname === '/characters' ? 'active' : ''}`}>Characters</Link>
          </span>
        </button>
        <button className="pushable">
          <span className="front">
            <Link to="/episodes" className={`nav-link ${location.pathname === '/episodes' ? 'active' : ''}`}>Episodes</Link>
          </span>
        </button>
        <button className="pushable">
          <span className="front">
            <Link to="/locations" className={`nav-link ${location.pathname === '/locations' ? 'active' : ''}`}>Locations</Link>
          </span>
        </button>
        <button className="pushable">
          <span className="front">
            <Link to="/shop" className={`nav-link ${location.pathname === '/shop' ? 'active' : ''}`}>Shop</Link>
          </span>
        </button>
      </div>
      
      <div className="w-8 flex flex-col ">
          <img src={shopLogo} alt="Shop Logo" className="" />
          <h1 className="">{totalClicks}</h1>
      </div>
    </nav>
  );
}

export default Navbar;
