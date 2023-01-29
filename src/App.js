import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Experience from './pages/Experience';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Experience />} />
      </Routes>
    </Router>
  
    
  );
}

export default App;
