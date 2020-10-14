import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import moment from 'moment';
// import 'react-datetime/css/react-datetime.css'
import './Message.css';

function Message({message, username}) {
  const isUser = username === message.username;
  return (
    <div className={`message ${isUser && 'message__user'}`}>   {/* if true */}


      <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>   {/*if else - ternary*/}
        <CardContent>

          <Typography
          color="textSecondary"
          gutterBottom
          style={{
            textTransform: 'capitalize',
            marginBottom: 0
          }}
          >
          {isUser ? username : message.username}
          </Typography>

          <Typography
          variant="h5"
          component="h2"
          color='textPrimary'
          style={{
            marginBottom: '5px'
          }}
          >
          {message.text}
          </Typography>

          <Typography
            type='dateTime'
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom

            >
            {moment().format('llll')}
          </Typography>
        </CardContent>
      </Card>

    </div>
  )
}

export default Message
