import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store';
import Promise from 'promise-polyfill';
import 'whatwg-fetch';
import objectAssign from 'object-assign';

if (!window.Promise) {
  window.Promise = Promise;
}

if (!Object.assign) {
    Object.assign = objectAssign
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
