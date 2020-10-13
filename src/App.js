import React, { useState, useEffect } from 'react';
import './App.css';
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
    <div className="App">

      <div className='heading'>
        <h1>Chatter Box</h1>
        <h2>Hey {username}</h2>
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
