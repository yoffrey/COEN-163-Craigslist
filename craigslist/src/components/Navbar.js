import { Link } from 'react-router-dom';
import React, {useState} from "react";
import logo from "../images/logo.png";
import './Navbar.css';
import Login from "./Login";
import MainCategory from "./MainCategory";

function Navbar(showBrowse) {
    const [searchInput, setSearchInput] = useState("");
    const [showLogin, setShowLogin] = useState(false);
    const [loggedIn, setLoggedIn] = useState("Login");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        if (isLoggedIn) {
        }
        else {
            setShowLogin(!showLogin);
        }

    }
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log('Do something')
        }
    }

    return (
        <div className='navbar-container'>
            <a href={'/'}><img className='logo' src={logo} alt="logo"/></a>
            <input className={'search-input'} type={'text'} placeholder={'try: car newer than 2010 with less than 100,000 miles within 20 miles from me'} onChange={handleChange} onKeyDown={handleKeyDown} value={searchInput} />
            <div>
                <Link to={`${isLoggedIn ? '/settings' : ''}`}>
                    <button className='navbar-button' onClick={onClickLogin}>{loggedIn}</button>
                </Link>
            </div>
            <div className={`hidden-login-container ${showLogin ? 'visible-login' : ''}`}>
                <Login setLoggedIn={setLoggedIn} setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn}/>
            </div>
        </div>
    );
}

export default Navbar;