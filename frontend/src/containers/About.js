import {CssBaseline, Typography} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

const About = () => {
    const classes = useStyles();

    return(
        <Container>
            <CssBaseline />
            <div className={classes.paper}>
                <Typography variant="h1">
                    About
                </Typography>
            </div>
        </Container>
    );
};

export default About;