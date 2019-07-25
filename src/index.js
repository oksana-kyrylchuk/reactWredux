import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'

import App from './app';

import configureStore from './utils/storeConfiguration'

import './index.css';


const store = configureStore()

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./app', renderApp)
}

renderApp()

