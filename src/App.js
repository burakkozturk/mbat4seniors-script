import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar/Navbar';
import GridSquare from './components/GridSquare/GridSquare';
import LoginForm from './components/LoginForm/LoginForm';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider> {/* AuthProvider ile tüm uygulamayı sarmalayın */}
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<GridSquare />} />
            <Route path="/login" element={<LoginForm />} />
            {/* Diğer route'lar buraya eklenebilir */}
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
