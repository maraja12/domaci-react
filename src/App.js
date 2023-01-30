import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Experience from './pages/Experience';
import Faq from './pages/Faq';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Experience />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
    </Router>
  
    
  );
}

export default App;
