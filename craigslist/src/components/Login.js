import React, {useState} from "react";
import "./Login.css"
import { Link } from "react-router-dom";


const Login = ({isShowLogin}) => {
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
                        <Link to={'/register'} >
                        <input type="submit" value="REGISTER" className="register-btn"/>
                        </Link>
                    </form>
                </div>
            </div>
        
        </div>
    );
}

export default Login;