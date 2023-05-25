import { Link } from 'react-router-dom';
import React, {useState} from "react";
import logo from "../images/logo.png";
import './Navbar.css';
import Login from "./Login";
import MainCategory from "./MainCategory";

function Navbar(showBrowse) {
    const [searchInput, setSearchInput] = useState("");
    const [showLogin, setShowLogin] = useState(false);

    const onClickLogin = () => {
        setShowLogin(!showLogin)
    }
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    return (
        <div className='navbar-container'>
            <a href={'/'}><img className='logo' src={logo} alt="logo"/></a>
            <input className={'search-input'} type={'text'} placeholder={'try: car newer than 2010 with less than 100,000 miles within 20 miles from me'} onChange={handleChange} value={searchInput} />
            <div>
                <button className='navbar-button'><Link to={"/cart"}></Link>Cart</button>
                <button className='navbar-button' onClick={onClickLogin}>Login</button>
            </div>
            <div className={`hidden-login-container ${showLogin ? 'visible-login' : ''}`}>
                {<Login />}
            </div>
        </div>
    );
}

export default Navbar;