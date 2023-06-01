import React, {useState} from "react";
import Navbar from "./components/Navbar.js";
import Home from './pages';
import Upload from './pages/upload';
import Post from './pages/post';
import Product from './pages/product';
import Register from './pages/register';
import Settings from './pages/settings';
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';

function App() {
    const [showBrowse, setShowBrowse] = useState(false);

    return (
      <Router>
              <Navbar setShowBrowse={setShowBrowse}/>
              <Routes>
                  <Route exact path='/' element={<Home setShowBrowse={showBrowse}/>}  />
                  <Route path='/upload' element={<Upload />} />
                  <Route path='/product' element={<Product />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/settings' element={<Settings />} />
                  <Route path='/post' element={<Post />} />
              </Routes>
      </Router>
  );
}

export default App;
