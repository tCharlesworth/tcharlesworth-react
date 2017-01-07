import React from 'react';
// React Router
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
// Route Components
import MainTemplate from './templates/main.js';
// Route Views
import HomeView      from './views/home.js';
import AboutView     from './views/about.js';
import PortfolioView from './views/portfolio.js';
import VrView        from './views/vr.js';
import PanoramaView  from './views/panorama.js';

// Route Config
var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={MainTemplate}>
            <IndexRoute component={HomeView} />
            <Route path="/portfolio" component={PortfolioView} />
            <Route path="/about"     component={AboutView} />
            <Route path="/vr"        component={VrView} />
            <Route path="/picture" component={PanoramaView} />
        </Route>
    </Router>
);

module.exports = routes;