import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import Main from './Pages/Main';
import DatePage from './Pages/DatePage'
import MathPage from './Pages/MathPage'
import YearPage from './Pages/YearPage'

ReactDOM.render(<Router>
  <Switch>
    <Route exact path="/"><Main /></Route>
    <Route path="/math"><MathPage /></Route>
    <Route path="/year"><YearPage /></Route>
    <Route path="/date"><DatePage /></Route>
  </Switch>
</Router>,
  document.getElementById('root')
);
