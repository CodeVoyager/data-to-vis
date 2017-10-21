import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/containers/App';
import registerServiceWorker from './registerServiceWorker';
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
    <App/>,
    document.getElementById('root'));
registerServiceWorker();
