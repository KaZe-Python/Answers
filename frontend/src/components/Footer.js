import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const drawerWidth = 240;

function Copyright() {
  return (
    <Typography variant="body2" color="initial" align="center">
      {'Copyright © '}
      <Link to={"/"}>
        Answer To Question
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    width: '100%',
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 10,
  },
  footer: {
    marginLeft: 20,
    fontSize: 17,
  },
}));



function Footer() {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Copyright />
    </AppBar>
  );
}

export default Footer;