import React from 'react';
// React Router
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
// Route Components
import MainTemplate from './templates/main.js';
// Route Views
import HomeView      from './views/home.js';
import AboutView     from './views/about.js';
import PortfolioView from './views/portfolio.js';

// Route Config
var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={MainTemplate}>
            <IndexRoute component={HomeView} />
            <Route path="/portfolio" component={PortfolioView} />
            <Route path="/about"    component={AboutView} />
        </Route>
    </Router>
);

module.exports = routes;