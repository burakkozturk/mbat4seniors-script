import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css'; // Özel CSS stilinizi burada belirtin
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Burada kullanıcı kayıt işlemini gerçekleştirecek kodu ekleyin
    // Örneğin, bir API'ye kayıt bilgilerini gönderme
    console.log("Kullanıcı kaydedildi:", username, email, password);
    // Kayıt başarılı olduktan sonra giriş sayfasına yönlendirme
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="register-section">
        <form onSubmit={handleSubmit} className="register-form">

          <h1>REGISTER</h1>
          <div className="input-icon username">
            <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-icon email">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-icon password">
            <FontAwesomeIcon icon={faLock} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
          <a href="/login">Already have an account? Log in</a>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
