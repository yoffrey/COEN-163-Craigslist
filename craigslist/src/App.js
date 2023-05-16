import './App.css';
import React from "react";
import {Link} from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from './pages';
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';


function App() {
  return (
      <Router>
          <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
      </Router>
  );
}

export default App;
