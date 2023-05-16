import { Link } from 'react-router-dom';
import React, {useState} from "react";
import logo from "../images/logo.png";
import './Navbar.css';

function Navbar() {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    return (
        <div className='container'>
            <a href={'/'}><img className='logo' src={logo} alt="logo"/></a>
            <input type={'text'} placeholder={'Search here'} onChange={handleChange} value={searchInput} />
            <div>
                <button className='button'><Link to={"/cart"}></Link>Cart</button>
                <button className='button'><Link to={"/login"}></Link>Login</button>
            </div>
        </div>
    );
}

export default Navbar;