import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom'; // Link bileşenini import edin
import './Navbar.css';

function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav>
      <div className="logo-container">
        <img src='./logo.png' alt="Logo" />
      </div>
      <div className="navbar-container">
        <ul>
          <li><Link to="/">Courses</Link></li>
          {currentUser ? (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><button onClick={logout}>Sign Out</button></li>
            </>
          ) : (
            <li><Link to="/login">Sign In</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

