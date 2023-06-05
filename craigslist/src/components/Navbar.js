import { Link } from 'react-router-dom';
import React, {useState} from "react";
import logo from "../images/logo.png";
import './Navbar.css';
import Login from "./Login";
import MainCategory from "./MainCategory";
import Messages from "./messages";

function Navbar({setShowBrowse}) {
    const [searchInput, setSearchInput] = useState("");
    const [showLogin, setShowLogin] = useState(false);
    const [loggedIn, setLoggedIn] = useState("Login");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const [Messages, setMessages] = useState("Messages");

    const onClickLogin = () => {
        if (isLoggedIn) {
        }
        else {
            setShowLogin(!showLogin);
        }

    }
    const onClickMessages = () => {
            setShowMessages(!showMessages);

    }
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setShowBrowse(true);
            console.log('Do something')
        }
    }

    return (
        <div className='navbar-container'>
            <Link to={'/'}><img className='logo' src={logo} alt="logo"/></Link>
            <input className={'search-input'} type={'text'} placeholder={'try: car newer than 2010 with less than 100,000 miles within 20 miles from me'} onChange={handleChange} onKeyDown={handleKeyDown} value={searchInput} />
            <div>
                <Link to={`${isLoggedIn ? '/settings' : ''}`}>
                    <button className='navbar-button' onClick={onClickLogin}>{loggedIn}</button>
                </Link>
            </div>
            <div className={`hidden-login-container ${showLogin ? 'visible-login' : ''}`}>
                <Login setLoggedIn={setLoggedIn} setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn}/>
            </div>

            <div>
                <Link to={`${showMessages ? '/messages' : ''}`}>
                    <button className='navbar-button-message' onClick={onClickMessages}>{Messages}</button>
                </Link>
            </div>
            <div className={`hidden-messages-container ${showMessages ? 'visible-messages' : ''}`}>
                <Messages setMessages={setMessages} setShowMessages={setShowMessages}/>
            </div>
        </div>
    );
}

export default Navbar;