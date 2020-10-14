// import React from 'react';
// import { MemoryRouter as Router } from 'react-router';
//
// import { Link as RouterLink } from 'react-router-dom'
// import Link from '@material-ui/core/Link';
// import { HomeIcon } from '@material-ui/icons/Home';
//
//
// const MyLink = props => <RouterLink to="www.google.com" {...props} />
// let editLink = <Link to="editTopic"/>;
//
//
// export default function HomeIconLink() {
//
//   return (
//     <Router>
//       <Link component={MyLink} onTouchTap={editLink}>
//         {<HomeIcon
//           style={{
//             fill: 'white',
//             fontSize: 35,
//             margin: 0
//           }}
//         />}
//       </Link>
//     </Router>
//   )
// }







// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
//
// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > * + *': {
//       marginLeft: theme.spacing(2),
//     },
//   },
// }));
//
// export default function HomeIconLink() {
//   const classes = useStyles();
//   const preventDefault = (event) => event.preventDefault();
//
//   return (
//     <Typography className={classes.root}>
//       <Link href="www.google.com" onClick={preventDefault} style={{color: 'white'}}>
//         Link
//       </Link>
//       {/*
//         // <Link href="www.google.com" onClick={preventDefault} color="inherit">
//         //   {'color="inherit"'}
//         // </Link>
//         // <Link href="www.google.com" onClick={preventDefault} variant="body2">
//         //   {'variant="body2"'}
//         // </Link>
//         */}
//     </Typography>
//   );
// }







//
// import React from 'react';
// import { MemoryRouter as Router } from 'react-router';
// import { Link as RouterLink } from 'react-router-dom';
// import { Typography, Link } from '@material-ui/core';
// import { HomeIcon, FlatButton } from '@material-ui/icons/Home';
//
//
// const preventDefault = (event) => {
//   event.preventDefault()
//   console.log("I'm linking to my website.")
// };
// // const consoleLog = () => {console.log("I'm linking to my website.")};
//
// export default function HomeIconLink (props) {
//   return (
//     <link href='nieleneethomas.web.app' rel='noopener noreferrer' />
//
//   )
// }





// <Typography>
//   <Link
//     // component={RouterLink}
//     // to='nieleneethomas.web.app'
//     href='https://nieleneethomas.web.app'
//     onClick={preventDefault}
//     target='_blank'
//     rel="noopener noreferrer"
//     // icon=
//   >
//     {<HomeIcon
  //       style={{
    //         fill: 'white',
    //         fontSize: 35,
    //         margin: 0
    //       }}
    //   />}
    //   <h1 style={{color: "white"}}>Nielene</h1>
    //   </Link>
    // </Typography>







// export default function HomeIconLink (props) {
//   return (
//
//     <Router>
//       <Link
//         component={RouterLink}
//         to='https://nieleneethomas.web.app'
//         href='https://nieleneethomas.web.app'
//         onClick={preventDefault}
//         icon={<HomeIcon
//           style={{
//             fill: 'white',
//             fontSize: 35,
//             margin: 0
//           }}
//         />}
//       >
//       </Link>
//     </Router>
//   )
// }




// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Paper from '@material-ui/core/Paper';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import HomeIcon from '@material-ui/icons/Home';
// import Typography from '@material-ui/core/Typography';
// import { Route, MemoryRouter } from 'react-router';
// import { Link as RouterLink } from 'react-router-dom';
//
// function ListItemLink(props) {
//   const { icon, primary, to } = props;
//
//   const renderLink = React.useMemo(
//     () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
//     [to],
//   );
//
//   return (
//     <li>
//       <ListItem button component={renderLink}>
//         {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
//         <ListItemText primary={primary} />
//       </ListItem>
//     </li>
//   );
// }
//
// ListItemLink.propTypes = {
//   icon: PropTypes.element,
//   primary: PropTypes.string.isRequired,
//   to: PropTypes.string.isRequired,
// };
//
// const useStyles = makeStyles({
//   root: {
//     width: 360,
//   },
// });
//
// export default function ListRouter() {
//   const classes = useStyles();
//
//   return (
//     <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
//       <div className={classes.root}>
//         <Route>
//           {({ location }) => (
//             <Typography gutterBottom>Current route: {location.pathname}</Typography>
//           )}
//         </Route>
//         {/*
//           // <Paper elevation={0}>
//           */}
//           <List aria-label="main mailbox folders">
//           {/*
//             // <ListItemLink to="/inbox" primary="Inbox" icon={<InboxIcon />} />
//             // <ListItemLink to="/drafts" primary="Drafts" icon={<DraftsIcon />} />
//             */}
//             <ListItemLink
//               to="https://nieleneethomas.web.app"
//               // primary="Home"
//               icon={<HomeIcon />}
//             />
//           </List>
//           {/*
//             // <Divider />
//             // <List aria-label="secondary mailbox folders">
//             // <ListItemLink to="/trash" primary="Trash" />
//             // <ListItemLink to="/spam" primary="Spam" />
//             </List>
//         </Paper>
//         */}
//       </div>
//     </MemoryRouter>
//   );
// }








// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// // import { blue } from '@material-ui/core/colors';
// import SvgIcon from '@material-ui/core/SvgIcon';
// // import { Link } from '@material-ui/core';
// //
// // import List from '@material-ui/core/List';
// // import ListItem from '@material-ui/core/ListItem';
// // import Paper from '@material-ui/core/Paper';
// // import ListItemIcon from '@material-ui/core/ListItemIcon';
// // import ListItemText from '@material-ui/core/ListItemText';
// import ListItemLink from '@material-ui/core/ListItemLink';
// // import InboxIcon from '@material-ui/icons/Inbox';
// // import DraftsIcon from '@material-ui/icons/Drafts';
// import HomeIcon from '@material-ui/icons/HomeIcon';
//
//
// // const preventDefault = (event) => event.preventDefault();
//
// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > svg': {
//       margin: theme.spacing(2),
//     },
//   },
// }));
//
// // {/*
// //   <Link
// //   href='https://nieleneethomas.web.app'
// //   onClick={preventDefault}
// //   >
// //   </Link>
// //   <path d="https://nieleneethomas.web.app" />
// //
// //   <List aria-label="main mailbox folders">
// //   <ListItemLink to="/inbox" primary="Inbox" icon={<InboxIcon />} />
// //   <ListItemLink to="/home" primary="Home" icon={<HomeIcon />} />
// //   <ListItemLink to="/drafts" primary="Drafts" icon={<DraftsIcon />} />
// //   </List>
//
// // <SvgIcon {...props}>
// // <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
// // </SvgIcon>
//
//   // */}
//
//
//
//
//
//
//
//
// function HomeIconMy(props) {
//   return (
//
//     <ListItemLink to="/home" primary="Home" icon={<HomeIcon />} />
//   );
// }
//
// function HomeLink (props) {
//   return (
//     <div>
//
//     </div>
//   )
// }
//
// export default function HomeIconLink() {
//   const classes = useStyles();
//
//   return (
//     <div className={classes.root}>
//       <HomeIconMy
//         style={{
//           fill: 'white',
//           fontSize: 35,
//           margin: 0
//         }}
//         to='https://nieleneethomas.web.app'
//       />
//     </div>
//   );
// }
