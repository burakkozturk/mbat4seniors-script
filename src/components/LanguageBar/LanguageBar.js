// components/LanguageBar.js
import React from 'react';
import './LanguageBar.css'; // Stil dosyası için

function LanguageBar() {
  return (
    <div className="language-bar">
      <img src="./lithuania.png" alt="English" title="English" />
      <img src="./denmark.png" alt="Spanish" title="Spanish" />
      <img src="./turkey.png" alt="French" title="French" />
      {/* Daha fazla dil ekleyebilirsiniz */}
    </div>
  );
}

export default LanguageBar;
