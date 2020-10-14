import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { blue } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link } from '@material-ui/core';

const preventDefault = (event) => event.preventDefault();

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));

function HomeIcon(props) {
  return (
    <div>
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>

    </div>
  );
}

export default function HomeIconLink() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomeIcon
        style={{
          fill: 'white',
          fontSize: 35,
          margin: 0
        }}
      >
      <Link
      href='https://nieleneethomas.web.app'
      onClick={preventDefault}
      >

      </Link>
      </HomeIcon>
    </div>
  );
}
