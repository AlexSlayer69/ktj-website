import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Pages'; 
import Login from './Pages/login_page';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/log-in' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
