import React from 'react';
var    ReactRouter = require('react-router');
// React Router
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
// Route Components
import MainTemplate  from './templates/main.js';
import HomeComponent from './components/home.js'

// Route Config

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={MainTemplate}>
            <IndexRoute component={HomeComponent} />
        </Route>
    </Router>
);

module.exports = routes;