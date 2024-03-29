import React, {useState} from "react";
import Navbar from "./components/Navbar.js";
import Home from './pages';
import Upload from './pages/upload';
import Post from './pages/post';
import Product from './pages/product';
import Register from './pages/register';
import Settings from './pages/settings';
import Messages from './components/Messages.js';
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';

function App() {
    const [showBrowse, setShowBrowse] = useState(false);
    const [loggedIn, setLoggedIn] = useState("Login");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleStateChange = (newValue) => {
        setShowBrowse(newValue);
    }

    const handleIsLoggedInChange = (isLoggedInValue, loggedInValue) => {
        setIsLoggedIn(isLoggedInValue);
        setLoggedIn(loggedInValue);
    }

    return (
      <Router>
              <Navbar setShowBrowse={setShowBrowse} setLoggedIn={loggedIn} setIsLoggedIn={isLoggedIn} onStateChange={handleIsLoggedInChange}/>
              <Routes>
                  <Route exact path='/' element={<Home setShowBrowse={showBrowse} onStateChange={handleStateChange}/>}  />
                  <Route path='/upload' element={<Upload />} />
                  <Route path='/product' element={<Product />} />
                  <Route path='/register' element={<Register setLoggedIn={setLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
                  <Route path='/settings' element={<Settings />} />
                  <Route path='/messages' element={<Messages />} />
                  <Route path='/post' element={<Post />} />
              </Routes>
      </Router>
  );
}

export default App;
