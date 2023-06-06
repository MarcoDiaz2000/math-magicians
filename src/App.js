import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Routes,
} from 'react-router-dom';
import Calculator from './router/Calculator';
import Home from './router/Home';
import Quote from './router/Quote';
import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/" className="nav-link">Calculator</Link>
            </li>
            <li>
              <Link to="/quote" className="nav-link">Quote</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<div>If page not found it goes here</div>} />
      </Routes>
    </Router>
  );
}

export default App;
