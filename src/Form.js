import React from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './Form.css';

function Form (props) {
  return (
    <form className='form'>
      <FormControl>
        <InputLabel>Enter a message</InputLabel>
        <Input
          value={props.input}
          onChange={event => props.setInput(event.target.value)}
        />
        <Button
          disabled={!props.input}
          variant='contained'
          color='primary'
          type='submit'
          onClick={props.sendMessage}
        >
          Send Message
        </Button>
      </FormControl>
    </form>
  )
}

export default Form
