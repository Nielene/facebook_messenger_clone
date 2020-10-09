import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    //all the logic to send a message goes here
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hellow clever programmers</h1>

      <input value={input} onChange={event => setInput(event.target.value)} />
      <button>Send Message</button>
      {/*input field*/}
      {/*input button*/}

      {/*messages themselves*/}
    </div>
  );
}

export default App;
