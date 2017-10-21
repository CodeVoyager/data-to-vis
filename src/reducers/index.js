import {
    combineReducers
} from 'redux';
import bpi from './bpi';
import loadingCounter from './loadingCounter';

export default combineReducers({
    bpi,
    loadingCounter
});