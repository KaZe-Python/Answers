import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {logout} from '../actions/auth';
import {connect} from 'react-redux';
import { AppBar, MenuItem, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles(theme => ({
    appBar: {
        width: '100%',
        marginLeft: 'none',
        backgroundColor: "#f58a07",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        anchor: 'right',
    },
    linkClass:{
        textDecoration: 'none',
    },
}));

const Navbar = ({logout, isAuthenticated}) => {
    const classes = useStyles();

    const guestLinks = () => (
        <Fragment>
            <MenuItem component={Link} to={'/login'}>
                <Typography variant='h6' className={classes.title}>
                    Log In
                </Typography>
            </MenuItem>
            <MenuItem component={Link} to={'/signup'}>
                <Typography variant='h6' className={classes.title}>
                    Sign Up
                </Typography>
            </MenuItem>
        </Fragment>
    );

    const authLinks = () => (
        <Fragment>
            <MenuItem component={Link} to={'#!'} onClick={logout}>
                <Typography variant='h6' className={classes.title}>
                    Log Out
                </Typography>
            </MenuItem>
        </Fragment>
    );

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <MenuItem component={Link} to={'/'}>
                    <Typography variant='h6' className={classes.title}>
                        Home
                    </Typography>
                </MenuItem>
                <MenuItem component={Link} to={'/about'}>
                    <Typography variant='h6' className={classes.title}>
                        About
                    </Typography>
                </MenuItem>
                {isAuthenticated ? authLinks() : guestLinks()}
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {logout})(Navbar);