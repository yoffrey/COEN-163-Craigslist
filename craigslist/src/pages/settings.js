import React from 'react'
import './settings.css'
import {Link} from "react-router-dom"

function Settings() {
    return (
        <>
            <div class="AccountSetting">
                <h3> Account Settings</h3>
                <Link className="navbar_link" to="/Profile">Profile</Link>
                <Link className="navbar_link" to="/Billing">Billing</Link>
                <Link className="navbar_link" to="/Notification">Notification</Link>
                <Link className="navbar_link" to="/DeleteAccount">Delete Account</Link>
            </div>
            {/*
    <div className="backGround">
    </div>
   <div class="personalInfo">
   <h3>Personal Information</h3>



   </div>
*/}
            <div class="mainBackground">
                <h3>{/*Main background*/} </h3>
            </div>

            <div class="child">
                <p>{/*child*/}Personal <br />Information</p>
            </div>
            <div class="child2">
                <p>{/*child 2*/}Home <br />Address</p>
            </div>
            <div class="child3">
                <p>Area Code</p>
                <h3>{/*child 3 */}</h3>
            </div>
            <div class="parent">
                <h3>{/*Parent */}</h3>
            </div>
            <div class="userBackground">
                <h3>{/*user Background*/}</h3>
            </div>
            <div class="userInput">
                <h3>{/*user Background*/}</h3>
            </div>
            <div class="userPic">
                <h3>{/*user Background*/}</h3>
            </div>



        </>
    )
}
export default Settings