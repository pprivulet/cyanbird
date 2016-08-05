import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'
import Header from './components/header.jsx'

const App = React.createClass({
  render() {
    return (
      <div>
        <Header/>        
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      
      
    </Route>
  </Router>
), document.getElementById('app'))
