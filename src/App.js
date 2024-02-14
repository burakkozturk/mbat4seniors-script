import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar/Navbar';
import LoginForm from './components/LoginForm/LoginForm';
import CourseGrid from './components/CourseGrid/CourseGrid';
import Register from './components/Register/RegisterForm';
import Footer from './components/Footer/Footer';


import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider> {/* AuthProvider ile tüm uygulamayı sarmalayın */}
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<CourseGrid />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            {/* Diğer route'lar buraya eklenebilir */}
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
