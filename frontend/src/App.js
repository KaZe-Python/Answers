import React, {Component} from 'react';
import {render} from 'react-dom';
import SiteRoute from './containers/SiteRoute';


export default class App extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    render(){
        return <div><SiteRoute /></div>;
    }
};

const appDiv = document.getElementById('root');
render(<App />, appDiv);