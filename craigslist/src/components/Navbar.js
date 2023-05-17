import { Link } from 'react-router-dom';
import React, {useState} from "react";
import logo from "../images/logo.png";
import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar-container'>
            <a href={'/'}><img className='logo' src={logo} alt="logo"/></a>
            <div>
                <button className='navbar-button'><Link to={"/cart"}></Link>Cart</button>
                <button className='navbar-button'><Link to={"/login"}></Link>Login</button>
            </div>
        </div>
    );
}

export default Navbar;