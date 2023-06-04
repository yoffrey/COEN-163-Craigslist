import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"


const Login = ({setLoggedIn, setShowLogin, setIsLoggedIn}) => {
    const handleLogin = (event) => {
        event.preventDefault();
        setLoggedIn("Settings");
        setIsLoggedIn(true);
        setShowLogin(false);
    }

    const handleRegister = () => {
        setShowLogin(false);
    }


    return (
        <div className={'${!isShowLogin ? "active": ""} show'}>
            <div className="login-form">
                <div className="form-box-solid">
                    <form>
                        <h1 className="login-text"> Sign In</h1>
                        <label className="usr-name">Username</label><br></br>
                        <input 
                            type="text"
                            name="username"
                            className="login-box"/> <br></br>

                        <label className = "usr-name">Password</label><br></br>
                        <input 
                            type="password"
                            name="password"
                            className="login-box"/> <br></br> <br></br>
                        <button onClick={handleLogin} className="login-btn">Login</button>
                        <Link to={'/register'} onClick={handleRegister}>
                            <button className="register-btn">Register</button>
                        </Link>
                    </form>
                </div>
            </div>
        
        </div>
    );
}

export default Login;