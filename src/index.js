import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/home.js';
import About from './pages/about/about.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Redirect from="/*" to="/home"></Redirect>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
