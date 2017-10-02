import React from 'react';
import { render } from 'react-dom';

import './scss/index.scss';
import { HashRouter as Router, Route } from 'react-router-dom';

import Main from './components/main/index';
import Home from './components/home/index';
import Tasks from './components/tasks/index';

render(( <Router>
    <div>
      <Route path="/" component={Main} />
      <Route exact path="/" component={Home} />
      <Route path="/tasks" component={Tasks} />
    </div>
  </Router> ), document.getElementById('app'));
