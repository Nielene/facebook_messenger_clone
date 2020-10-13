import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
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
      <h1>Chatter Box</h1>
      <h2>Hey {username}</h2>

      {
        messages.map(message => (
          <Message username={username} message={message} /> // message: the entire object {user and text}
        ))
      }

      <Form input={input} setInput={setInput} sendMessage={sendMessage}/>


      <form>
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

    </div>
  );
}

export default App;
