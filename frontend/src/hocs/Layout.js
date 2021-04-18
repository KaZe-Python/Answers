import React, {Fragment, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {connect} from 'react-redux';
import {checkAuthenticated, load_user} from '../actions/auth';

const Layout = (props) => {

    useEffect(() => {
        props.checkAuthenticated();
        props.load_user();
    }, []);
    return(
        <Fragment>
                <Navbar />
                {props.children}
                <Footer />
        </Fragment>
    );
};

export default connect(null, {checkAuthenticated, load_user})(Layout);