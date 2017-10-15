import {
    stopLoading,
    startLoading
} from '../actions';
import {
    DATE_FORMAT
} from '../config';
import store from '../store';
const R = require('ramda');

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'https://api.coindesk.com/v1/bpi/';

const getCurrencies = (callback) => {
    store.dispatch(startLoading());
    fetch([CORS_PROXY, BASE_URL, 'supported-currencies.json'].join(''), {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(x => x.json())
    .then(R.map(R.prop('currency')))
    .then(function (x) {
        store.dispatch(stopLoading());
        callback(x);
    })
    .catch(error => {
        store.dispatch(stopLoading());
    });
}

const getData = (startDate, endDate, currency, callback) => {
    let data = {
        start: (startDate && startDate.format(DATE_FORMAT)),
        end: (endDate && endDate.format(DATE_FORMAT)),
        currency
    };

    const notEmpty = R.filter(R.compose(R.not, R.isNil));
    const urlData = R.map(R.join('='), R.toPairs(notEmpty(data))).join('&');

    store.dispatch(startLoading());
    fetch([CORS_PROXY, BASE_URL, 'historical/close.json', '?', urlData].join(''), {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(x => x.json())
    .then(R.prop('bpi'))
    .then(R.toPairs)
    .then(function (x) {
        store.dispatch(stopLoading());
        callback(x);
    })
    .catch(error => {
        store.dispatch(stopLoading());
    });
}

export default {
    getCurrencies,
    getData,
};