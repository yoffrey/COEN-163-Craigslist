import './App.css';
import React from "react";
import Navbar from "./components/Navbar.js";
import Home from './pages';
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';

function App() {
  return (
      <Router>
          <div className={'body'}>
              <Navbar />
              <Routes>
                  <Route exact path='/' element={<Home />}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
