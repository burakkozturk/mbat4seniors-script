import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'; // Link bileşenini import edin
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faSignOutAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Gerekirse FontAwesome ikonlarını import edin

import './Navbar.css';

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate(); // useNavigate hook'unu kullanarak bir navigate fonksiyonu oluşturun

  const handleLogout = async () => {
    try {
      await logout(); // logout fonksiyonunu çağır
      navigate('/'); // Çıkış işlemi başarılı olduktan sonra ana sayfaya yönlendir
    } catch (error) {
      console.error("Çıkış işlemi sırasında hata oluştu", error);
    }
  };


  return (
    <nav>
      <div className="logo-container">
        <img src='./logo.png' alt="Logo" />
      </div>
      <div className="navbar-container">
        <ul>
          <li>
            <Link className='goBackButton' to="/" title="Go Back to Website">
               {/* FontAwesome ikonunu kullanarak */}
              <span>Go Back 2 Website</span>
            </Link>
          </li>
          <li><Link to="/">Courses</Link></li>
          {currentUser ? (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li>
                <button onClick={handleLogout} title="Sign Out"> {/* Çıkış yap işlemini handleLogout ile tetikleyin */}
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
