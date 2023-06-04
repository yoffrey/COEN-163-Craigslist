import React from 'react';
import './register.css';

const RegisterForm = () => {
    return (
      <div className="register-container">
        <h1 className={'sign-up-header'}>Sign Up</h1>
        <div className="input-wrapper">
          <label className={'sign-up-labels'}>First Name</label>
          <input className={'sign-up-inputs'} type="text" id="first-name" placeholder="John" />
        </div>
        <div className="input-wrapper">
          <label className={'sign-up-labels'}>Last Name</label>
          <input className={'sign-up-inputs'} type="text" id="last-name" placeholder="Doe" />
        </div>
        <div className="input-wrapper">
          <label className={'sign-up-labels'}>Email</label>
          <input className={'sign-up-inputs'} type="email" id="email" placeholder="johndoe@craigslist.com" />
        </div>
        <div className="input-wrapper">
          <label className={'sign-up-labels'}>Password</label>
          <input className={'sign-up-inputs'} type="password" id="password" placeholder="" />
        </div>
        <div className="input-wrapper">
          <label className={'sign-up-labels'}>Confirm Password</label>
          <input className={'sign-up-inputs'} type="password" id="confirm-password" placeholder="" />
        </div>
        <button className="register-button">Register</button>
      </div>
    );
  };
  
  export default RegisterForm;
  