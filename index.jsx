import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import TOS from './modules/TOS'
import Privacy from './modules/Privacy'
import Home from './modules/Home'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import 'jquery/dist/jquery.js'
import './semantic/dist/semantic.js'
import './semantic/dist/semantic.css'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/tos" component={TOS}/>
      <Route path="/privacy" component={Privacy}/>      
    </Route>
  </Router>
), document.getElementById('app'))
