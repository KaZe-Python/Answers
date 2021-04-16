import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import ConfirmPassword from './ConfirmPassword';
import Activate from './Activate';

import {Provider} from 'react-redux';
import store from '../store';

import Layout from '../hocs/Layout';

const SiteRoute = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login}/>
                    <Route path='/signup' component={SignUp} />
                    <Route path='/reset-password' component={ResetPassword} />
                    <Route path='/password/reset/confirm/:uid/:token' component={ConfirmPassword} />
                    <Route path='/activate/:uid/:token' component={Activate} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default SiteRoute;