var ReactDOM = require('react-dom');
var Hello = require('./component.jsx');
var React = require('react');

import './main.css'

main();



function main() {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}


