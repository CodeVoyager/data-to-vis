import {
    combineReducers
} from 'redux';
import availableCurrencies from './availableCurrencies';
import currency from './currency';
import data from './data';
import startDate from './startDate';
import endDate from './endDate';

export default combineReducers({
    availableCurrencies,
    currency,
    data,
    startDate,
    endDate,
});