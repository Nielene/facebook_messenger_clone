import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import HomeIconLink from './HomeIconLink.js'
import './AppBanner.css';

function AppBanner (props) {
  return (
    <div className='AppBar__body'>
      <AppBar
        position="fixed"
        style= {{
          margin: 0
        }}
      >
        <Toolbar
          variant="dense">

          <HomeIconLink />

          <Typography
            variant="h3"
            fontWeight="fontWeightBold"
            color="inherit"
          >
            Chatter Box
          </Typography>

          <Typography
            className='welcome__text'
            variant="h6"
            color="inherit"
            fontSize="0.875rem"
            fontWeight={500}
            fontStyle="normal"
            fontFamily="Roboto, Helvetica, Arial, sans-serif"
            letterSpacing="0.02857em"
            style={{ textTransform: 'uppercase'}}
          >
            <i>WELCOME <strong>{props.username}</strong></i>
          </Typography>

        </Toolbar>
      </AppBar>
    </div>



  )
}

export default AppBanner
