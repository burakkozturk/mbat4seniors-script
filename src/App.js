import React from 'react';
import Navbar from './components/Navbar';
import './App.css'; 
import GridSquare from './components/GridSquare/GridSquare';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GridSquare />
    </div>
  );
}

export default App;
