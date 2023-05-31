import React from 'react';
import 'register.css';

const RegisterForm = () => {
    return (
      <div className="register-container">
        <h1>Register</h1>
        <div className="input-wrapper">
          <label htmlFor="first-name">First Name:</label>
          <input type="text" id="first-name" placeholder="Enter your first name" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="last-name">Last Name:</label>
          <input type="text" id="last-name" placeholder="Enter your last name" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password" />
        </div>
        <button className="register-button">Register</button>
      </div>
    );
  };
  
  export default RegisterForm;
  