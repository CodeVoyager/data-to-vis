import {
    combineReducers
} from 'redux';

import availableCurrencies from './availableCurrencies';
import currency from './currency';
import data from './data';
import startDate from './startDate';
import endDate from './endDate';
import loadingCounter from './loadingCounter';

export default combineReducers({
    availableCurrencies,
    currency,
    data,
    startDate,
    endDate,
    loadingCounter
});