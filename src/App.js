import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message.js'

function App() {
  const [input, setInput] = useState('');   // state hooks
  const [messages, setMessages] = useState([
    {username: 'sonny', text: 'hey guys'},
    {username: 'qazi', text: 'whats up'}
  ]);
  const [username, setUsername] = useState('');

  console.log('input:', input, 'message:', messages, 'username:', username);
  // useState = variable in React. a type of hook.
  // useEffect = run code on a condition in REACT. a type of hook.

  useEffect(() => {
    // const username = prompt('Please enter your name');
    setUsername(prompt('Please enter your name'))
  }, [] ) // condition

  const sendMessage = (event) => {
    event.preventDefault();   // bc of button type='submit'
    setMessages([
      ...messages, {username: username, text: input}
    ]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hellow Clever Programmers</h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      {
        messages.map(message => (
          <Message username={message.username} text={message.text} />
        ))
      }

    </div>
  );
}

export default App;
