import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Login.css"

const Login = ({setLoggedIn, setShowLogin, setIsLoggedIn}) => {


    const handleLogin = () => {
        setLoggedIn("Settings");
        setShowLogin(false);
        setIsLoggedIn(true);
    }


    return (
        <div className={'${!isShowLogin ? "active": ""} show'}>
            <div className="login-form">
                <div className="form-box solid">
                    <form>
                        <h1 className="login-text"> Sign In</h1>
                        <label>Username</label><br></br>
                        <input 
                            type="text"
                            name="username"
                            className="login-box"/> <br></br>

                        <label>Password</label><br></br>
                        <input 
                            type="password"
                            name="password"
                            className="login-box"/> <br></br>
                        <input type="submit" value="LOGIN" className="login-btn"/>
                        <Link to={'/register'} onClick={handleLogin}>
                            <input type="submit" value="REGISTER" className="register-btn"/>
                        </Link>
                    </form>
                </div>
            </div>
        
        </div>
    );
}

export default Login;