import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from  'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './scss/index.scss';

import Main from './components/main/index';

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('app'));
