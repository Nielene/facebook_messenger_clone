import React, { useState, useEffect } from 'react';
import './App.css';
import AppBanner from './AppBanner.js'
import db from './firebase.js'
// import HomeIconLink from './HomeIconLink.js'
// import HomeIconLink from './HomeIconLink.js'

import Message from './Message.js'
import Form from './Form.js'

function App() {

  const [input, setInput] = useState('');   // state hooks
  const [messages, setMessages] = useState([
    {username: 'Alia', message: 'How are you?'},
    {username: 'Nelia', message: 'Alright. You?'}
  ]);
  const [username, setUsername] = useState('');


  useEffect(() => { // aim: retrieve messages in form of object {username: 'value', text: 'value'}
    db.collection('messages').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))   // a listener --> live capture of the database
    })
  }, [] )  // no dependencies => run once when the app component loads

  useEffect(() => {  // run code on a condition in REACT
    // const username = prompt('Please enter your name');
    setUsername(prompt('Please enter your name'))
  }, [] )  // the condition

  const sendMessage = (event) => {
    event.preventDefault();   // bc of button type='submit'
    setMessages([
      ...messages, {username: username, message: input}
    ]);
    setInput('');
  }


  return (
    <div className="App" >

      <div className='AppBanner__area'>
        <AppBanner username={username}/>
      </div>


      <div className='form__area'>
        <Form input={input} setInput={setInput} sendMessage={sendMessage}/>
      </div>

      <div className='message__area'>
        {
          messages.map(message => (
            <Message username={username} message={message} /> // message: the entire object {user and text}
            ))
          }
      </div>

    </div>
  );

}

export default App;
