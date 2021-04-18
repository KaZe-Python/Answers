import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  type: {
    position: "fixed",
    margin: "0",
    padding: "0",
    width: "100%",
    display:"flex",
    bottom: "10px",
    justifyContent: "center",
  },
  link: {
    color: "inherit",
    textDecoration: "none"
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <Typography variant="body2" className={classes.type}>
      Copyright &copy; &nbsp; 
      <Link to={"/"} className={classes.link}>
        Answer To Question
      </Link>
      &nbsp;
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Footer;