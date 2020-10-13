#App.js

```js

const [input, setInput] = useState('');   // state hooks
const [messages, setMessages] = useState([   // make messages an object
  {username: 'sonny', text: 'hey guys'},
  {username: 'qazi', text: 'whats up'}
]);
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
  event.preventDefault();   // bc of button type='submit'

  setMessages([
    //   ...messages, input         input has to change to an object.
    ...messages, {username: username, text: input}
  ]); //
  setInput('');

  // messages is set as on object; even though input is being set as a string, it needs to be interpreted as an object, to match messages.
}

```

=========================================
#Message.js

```js

<Typography color='textSecondary'>
  ({new Date(message.timestamp?.seconds * 1000).toUTCString()})
</Typography>

```

=========================================
