import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {connect} from 'react-redux'
import {
    availableCurrencies,
    currency,
    data,
    startDate,
    endDate,
    isLoading,
} from './selectors';
import {
    setAvailableCurrencies as setAvailableCurrenciesAction,
    setCurrency as setCurrencyAction,
    setEndDate as setEndDateAction,
    setStartDate as setStartDateAction,
    setData as setDataAction
} from './actions';
import store from './store'
import api from './api'
import {
    DATE_FORMAT,
    PREFERED_CURRENCY
} from './config'
import Loader from './Loader';
import Chart from './Chart';
import moment from 'moment';
const R = require('ramda');

const mapStateToProps = state => {
    return {
        availableCurrencies: availableCurrencies(state),
        currency: currency(state),
        data: data(state),
        startDate: startDate(state),
        endDate: endDate(state),
        isLoading: isLoading(state),
    };
}
class App extends Component {
    onStartDateChange (date) {
        store.dispatch(setStartDateAction(date));
    }
    onEndDateChange (date) {
        store.dispatch(setEndDateAction(date));
    }
    onCurrencyChange (event) {
        store.dispatch(setCurrencyAction(event.target.value));
    }
    onCurrenciesAvailable (currencies) {
        let currency = R.find(R.equals(PREFERED_CURRENCY), currencies);

        store.dispatch(setCurrencyAction(currency || currencies[0]));
        store.dispatch(setAvailableCurrenciesAction(currencies));
    }
    componentDidMount () {
        api.getCurrencies(this.onCurrenciesAvailable);
        if (R.isNil(this.props.startDate)) {
            store.dispatch(setStartDateAction(moment().subtract(1, 'years')));
        }
        if (R.isNil(this.props.endDate)) {
            store.dispatch(setEndDateAction(moment()));
        }
    }
    onSubmit () {
        api.getData(this.props.startDate, this.props.endDate, this.props.currency, (data) => {
            store.dispatch(setDataAction(data));
        });
    }
    render() {
        let availableCurrenciesOptions = null;
        let margin = {top: 20, right: 20, bottom: 30, left: 50};

        if (this.props.availableCurrencies && this.props.availableCurrencies.length) {
            availableCurrenciesOptions = this.props.availableCurrencies.map(currency => {
                return <option key={currency} value={currency}>{currency}</option>;
            });
        }

        return (
            <div className="app">
                <header className="header">
                    <h1 className="title">Data to Vis</h1>
                    <h2 className="sub-title">Bitcoin price index chart</h2>
                </header>
                <div className="steps">
                    <div className="step">
                        <div className="header">
                            1. Select dates
                        </div>
                        <div className="cols">
                            <div className="col-half">
                                    <DatePicker
                                        className="input"
                                        selected={this.props.startDate}
                                        onChange={this.onStartDateChange}
                                        maxDate={this.props.endDate}
                                        dateFormat={DATE_FORMAT}
                                        placeholderText="Click to select start date"
                                    />
                                </div>
                                <div className="col-half">
                                    <DatePicker
                                        className="input"
                                        selected={this.props.endDate}
                                        onChange={this.onEndDateChange}
                                        minDate={this.props.startDate}
                                        dateFormat={DATE_FORMAT}
                                        placeholderText="Click to select end date"
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="step">
                        <div className="header">
                            2. Select currency
                        </div>
                        <div className="cols">
                            <div className="col-full">
                                {
                                    (this.props.availableCurrencies && this.props.availableCurrencies.length)
                                    ? (
                                        <select className="input" value={this.props.currency} onChange={this.onCurrencyChange}>
                                            {availableCurrenciesOptions}
                                        </select>
                                    ) : null
                                }

                            </div>
                        </div>
                    </div>
                    <div className="step">
                        <div className="header">
                            3. Click submit
                            <div className="cols">
                                <div className="col-full">
                                    <button disabled={!(this.props.availableCurrencies && this.props.availableCurrencies.length)} onClick={this.onSubmit.bind(this)} className="input submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    (this.props.data && this.props.data.length) ? (
                        <Chart
                            data={this.props.data}
                            width={860}
                            height={400}
                            margin={margin}
                            xKey={0}
                            yKey={1}
                        />
                    ) : null
                }
                {
                    this.props.isLoading ? (
                        <Loader/>
                    ) : null
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
export {App};