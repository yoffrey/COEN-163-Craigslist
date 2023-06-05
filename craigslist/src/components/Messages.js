import React, {useState} from 'react';
import './Messages.css'

const Messages = ({setShowMessages}) => {
    const [messageInput, setMessageInput] = useState("Enter message...");
    const unhide = () => {
      setMessageInput("Enter message...");
      const name = document.getElementById("welcomeForm").value;
      document.getElementById("hidden").style.display = "block";
      document.getElementById("nextmsg").innerHTML = "You: " + name;
      const today = new Date();
      document.getElementById("time-now").innerHTML = today.getHours() + ":" + today.getMinutes();
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
        setShowMessages(false);

        document.getElementById("myForm0").style.display = "none";
      }

      const handleMessageChange = (e) => {
        e.preventDefault();
        setMessageInput(e.value);
      }

  const handleInputClick = () => {
      setMessageInput('');
  }

  const handleMessageEnter = (e) => {
      if (e.key === "Enter"){
        e.preventDefault();
        unhide();
      }

  }

  return (
    <>
<div className="chat-popup" id="myForm0">
  <form className="form-container">
    <div className={'message-header'}>Messages</div>
    <div className="message">

    <div className="all">
  <div className={'chat-title'}>The Cat</div>
  <button type="button" className="btn message" onClick={openForm1}>Message</button>
</div>

<div className="all">
  <div className={'chat-title'}>Sunglasses</div>
  <button type="button" className="btn message" onClick={openForm1}>Message</button>
</div>

<div className="all">
  <div className={'chat-title'}>Panigale V4</div>
    <button type="button" className="btn message" onClick={openForm1}>Message</button>
</div>

<div className="all">
  <div className={'chat-title'}>Mona Lisa 2021</div>
    <button type="button" className="btn message" onClick={openForm1}>Message</button>
</div>
</div>
    <button type="button" className="btn cancel" onClick={closeForm1}>Close</button>
  </form>
</div>

<div className="chat-popups" id="myForm">
  <form className="form-container">
    <h1>Chat</h1>

    <label form="msg"><b>The Cat</b></label>
    <div className="message">
    <div className="container">
  <p>You: Hello. How are you today?</p>
  <span className="time-right">11:00</span>
</div>
<hr></hr>
<div className="container darker">
  <p>Other: Hey! I'm fine. Thanks for asking!</p>
  <span className="time-left">11:01</span>
</div>
<hr></hr>
<div className="container">
  <p>You: Alright, where do you live so we can decide where to meet up?</p>
  <span className="time-right">11:02</span>
</div>
<hr></hr>
<div className="container darker">
  <p>Other: I live in Santa Clara</p>
  <span className="time-left">11:05</span>
</div>
<hr></hr>
<div className="container" id="hidden">
  <p id="nextmsg">You:Great!</p>
  <span id="time-now" className="time-right">11:10</span>
</div>
</div>
    <input className={'chat-input'} type="text" value={messageInput} id="welcomeForm" name="msg" onChange={handleMessageChange} onClick={handleInputClick} onKeyDown={handleMessageEnter} required></input>
    <button type="button" className="btn" onClick={unhide}>Send</button>
    <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
  </form>
</div>
    </>
  );
}
export default Messages;