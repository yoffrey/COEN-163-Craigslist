import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Login.css"
import { Link } from "react-router-dom";


const Login = ({isShowLogin}) => {
const Login = ({setLoggedIn, setShowLogin, setIsLoggedIn}) => {


    const handleLogin = () => {
        setLoggedIn("Settings");
        setShowLogin(false);
        setIsLoggedIn(true);
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
                        <input type="submit" value="LOGIN" className="login-btn"/>
<<<<<<< HEAD
                        <Link to={'/register'} >
                        <input type="submit" value="REGISTER" className="register-btn"/>
=======
                        <Link to={'/register'} onClick={handleLogin}>
                            <input type="submit" value="REGISTER" className="register-btn"/>
>>>>>>> 9efd061b0a4445774a58adf0158f42c80ea39d65
                        </Link>
                    </form>
                </div>
            </div>
        
        </div>
    );
}

export default Login;