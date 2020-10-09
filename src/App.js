import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message.js'

function App() {
  const [input, setInput] = useState('');   // state hooks
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  console.log('input:', input, 'message:', messages, 'username:', username);
  // useState = variable in React. a type of hook.
  // useEffect = run code on a condition in REACT. a type of hook.

  useEffect(() => {
    // const username = prompt('Please enter your name');
    // setUsername('')
    setUsername(prompt('Please enter your name'))
    //run code here...
    //if it is blank inside the dependencies, [], this code runs ONCE (default condition: when the page loads) when the app component loads
    //if condition/dependency is [input], useEffect will run every time anything is typed: 'h', 'he', 'hel', 'hell', 'hello' - see console.log(input)
    // leave it empty bc we only want to prompt the user once.
  }, [] ) // condition

  const sendMessage = (event) => {
    //all the logic to send a message goes here
    event.preventDefault();   // bc of button type='submit'
    setMessages([...messages, input]);
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
          <Message text={message}/>
        ))
      }

    </div>
  );
}

export default App;
