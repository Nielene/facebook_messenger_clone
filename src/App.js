import React, { useState, useEffect } from 'react';
import './App.css';
import AppBanner from './AppBanner.js'
// import HomeIconLink from './HomeIconLink.js'
// import HomeIconLink from './HomeIconLink.js'

import Message from './Message.js'
import Form from './Form.js'

function App() {

  const [input, setInput] = useState('');   // state hooks

  const [messages, setMessages] = useState([
    {username: 'Alia', text: 'How are you?'},
    {username: 'Nelia', text: 'Alright. You?'}
  ]);

  const [username, setUsername] = useState('');
  useEffect(() => {
    // const username = prompt('Please enter your name');
    setUsername(prompt('Please enter your name'))
  }, [] )

  const sendMessage = (event) => {
    event.preventDefault();   // bc of button type='submit'
    setMessages([
      ...messages, {username: username, text: input}
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
