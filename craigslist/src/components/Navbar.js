import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import logo from "../images/logo.png";
import './Navbar.css';
import Messages from '../components/Messages';

const Navbar = ({ setShowBrowse, setLoggedIn, setIsLoggedIn, onStateChange }) => {
    const [searchInput, setSearchInput] = useState("");
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();
    const [showMessages, setShowMessages] = useState(false);

    const onClickLogin = () => {
        if (setIsLoggedIn) {
        } else {
            setShowLogin(!showLogin);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setShowBrowse(true);
            navigate('/');
        }
    };

    const onLogoClick = () => {
        setShowBrowse(false);
        setShowLogin(false);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        onStateChange(true, "Settings")
        setShowLogin(false);
    };

    const handleRegister = () => {
        setShowLogin(false);
    };

    const onClickMessages = () => {
        setShowMessages(!showMessages);
    }

    return (
        <>
            <div className='navbar-container'>
                <Link to='/' onClick={onLogoClick}><img className='logo' src={logo} alt="logo" /></Link>
                <input className='search-input' type='text' placeholder='red suv newer than 2010 less than 100,000 miles within 15 minutes from me 25 mpg' onChange={handleChange} onKeyDown={handleKeyDown} value={searchInput} />
                <div>
                    <Link to={setIsLoggedIn ? '/settings' : ''}>
                        <button className='navbar-button' onClick={onClickLogin}>{setLoggedIn}</button>
                    </Link>
                </div>
                <div className={`hidden-login-container ${showLogin ? 'visible-login' : ''}`}>
                    <div className={`${!setShowLogin ? "active" : ""} show`}>
                        <div className="login-form">
                            <div className="form-box-solid">
                                <form>
                                    <h1 className="login-text">Sign In</h1>
                                    <label className="usr-name">Username</label><br></br>
                                    <input
                                        type="text"
                                        name="username"
                                        className="login-box" /><br></br>
                                    <label className="usr-name">Password</label><br></br>
                                    <input
                                        type="password"
                                        name="password"
                                        className="login-box" /><br></br><br></br>
                                    <button onClick={handleLogin} className="login-btn">Login</button>
                                    <Link to='/register' onClick={handleRegister}>
                                        <button className="login-btn">Register</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {setIsLoggedIn && <button className='msg-btn' onClick={onClickMessages}>Messages</button>}
            {showMessages && <Messages setShowMessages={setShowMessages} className={'visible-messages'}/>}
        </>
    );
};

export default Navbar;