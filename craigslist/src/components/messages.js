import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './messages.css'

function Messages(){
    const unhide = () => {
      var name = document.getElementById("welcomeForm").value;
      document.getElementById("hidden").style.display = "block";
      document.getElementById("nextmsg").innerHTML = "You: " + name;
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes();
      document.getElementById("time-now").innerHTML = time;
    }
    const openForm = () => {
        document.getElementById("myForm0").style.display = "block";
      }
      //all messages
      const openForm1 = () => {
        document.getElementById("myForm").style.display = "block";
      }
      const closeForm = () => {
        document.getElementById("myForm").style.display = "none";
      }
      //all messages
      const closeForm1 = () => {
        document.getElementById("myForm0").style.display = "none";
      }
  return (
    <>
<div class="chat-popup" id="myForm0">
  <form action="/action_page.php" class="form-container">
    <h1>All Messages</h1>
    <div class="message">
    
    <div class="all">
  <p>The Cat</p>
  <button type="button" class="btn message" onClick={openForm1}>Message</button>
</div>

<div class="all">
  <p>Sunglasses</p>
  <button type="button" class="btn message" onClick={openForm1}>Message</button>
</div>

<div class="all">
  <p>Panigale V4</p>
    <button type="button" class="btn message" onClick={openForm1}>Message</button>
</div>

<div class="all">
  <p>Mona Lisa 2021</p>
    <button type="button" class="btn message" onClick={openForm1}>Message</button>
</div>
</div>
    <button type="button" class="btn cancel" onClick={closeForm1}>Close</button>
  </form>
</div>

<div class="chat-popups" id="myForm">
  <form action="/action_page.php" class="form-container">
    <h1>Chat</h1>

    <label for="msg"><b>The Cat</b></label>
    <div class="message">
    <div class="container">
  <p>You: Hello. How are you today?</p>
  <span class="time-right">11:00</span>
</div>
<hr></hr>
<div class="container darker">
  <p>Other: Hey! I'm fine. Thanks for asking!</p>
  <span class="time-left">11:01</span>
</div>
<hr></hr>
<div class="container">
  <p>You: Alright, where do you live so we can decide where to meet up?</p>
  <span class="time-right">11:02</span>
</div>
<hr></hr>
<div class="container darker">
  <p>Other: I live in Santa Clara</p>
  <span class="time-left">11:05</span>
</div>
<hr></hr>
<div class="container" id="hidden">
  <p id="nextmsg">You:Great!</p>
  <span id="time-now" class="time-right">11:10</span>
</div>
<input type="text" placeholder="Type message.." id="welcomeForm" name="msg" required></input>
</div>

    <button type="button" class="btn" onClick={unhide}>Send</button>
    <button type="button" class="btn cancel" onClick={closeForm}>Close</button>
  </form>
</div>
    </>
  );
}
export default Messages;