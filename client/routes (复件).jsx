import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
var App = require('./pages/App.jsx').default
var About = require('./pages/about.jsx').default


const router = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
        </Route>
    </Router>
);

ReactDOM.render(
    router,
    document.getElementById('app')
);
