import React from 'react';

import '../Navbar.css'; // Stil dosyasını içe aktarma
function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Courses</a></li>
        <li><a href="/">Profile</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
