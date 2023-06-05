import { Link } from 'react-router-dom';
import React, {useState} from "react";
import logo from "../images/logo.png";
import './Navbar.css';
import Login from "./Login";

function Navbar({setShowBrowse}) {
    const [searchInput, setSearchInput] = useState("");
    const [loggedIn, setLoggedIn] = useState("Login");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

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
            setShowBrowse(true);
        }
    }

    const onLogoClick = () => {
        setShowBrowse(false);
        setShowLogin(false);
    }

    return (
        <div className='navbar-container'>
            <Link to={'/'} onClick={onLogoClick}><img  className='logo' src={logo} alt="logo" /></Link>
            <input className={'search-input'} type={'text'} placeholder={'red suv newer then 2010 less than 100,000 miles within 15 minutes from me 25 mpg'} onChange={handleChange} onKeyDown={handleKeyDown} value={searchInput} />
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