import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom'; // Link bileşenini import edin
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


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
              <li>
                <button onClick={logout} title="Sign Out">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </button>
              </li>
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

