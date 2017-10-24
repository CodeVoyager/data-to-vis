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
    highlights,
    currentHighlight
} from '../../selectors/bpi';
import {
    isLoading,
} from '../../selectors';
import {
    setAvailableCurrencies as setAvailableCurrenciesAction,
    setCurrency as setCurrencyAction,
    setEndDate as setEndDateAction,
    setStartDate as setStartDateAction,
    setData as setDataAction,
    setHighLights as setHighLightsAction,
    setCurrentHighlightDate as setCurrentHighlightDateAction,
    setCurrentHighlightDescription as setCurrentHighlightDescriptionAction,
    currentHighlightReset as currentHighlightResetAction,
    addHighLight as addHighLightAction
} from '../../actions/bpi';
import {bpi as api} from '../../api'
import {
    DATE_FORMAT,
    PREFERED_CURRENCY
} from '../../config'
import Loader from '../presentational/Loader';
import Chart from '../presentational/Chart';
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
        highlights: highlights(state),
        currentHighlight: currentHighlight(state),
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onComponentDidMount: () => {
            dispatch(setHighLightsAction([
                {
                    date: '2006-10-01',
                    description: 'Mt. Gox founding'
                },
                {
                    date: '2015-01-06',
                    description: 'Mt. Gox Bankruptcy'
                },
                {
                    date: '2016-05-01',
                    description: 'Mt. Gox Bankruptcy (Final)'
                },
                {
                    date: '2017-04-01',
                    description: 'Bitfinex announced that it was no longer able to let users withdraw their funds in USD'
                },
            ]));
        },
        onNilStartDate: () => {
            dispatch(setStartDateAction(moment().subtract(5, 'years')));
        },
        onNilEndDate: () => {
            dispatch(setEndDateAction(moment()));
        },
        onEndDateChange: (date) => {
            dispatch(setEndDateAction(date));
        },
        onStartDateChange: (date) => {
            dispatch(setStartDateAction(date));
        },
        onCurrencyChange: (currency) => {
            dispatch(setCurrencyAction(currency));
        },
        onCurrenciesAvailable: (currencies) => {
            let currency = R.find(R.equals(PREFERED_CURRENCY), currencies);

            dispatch(setCurrencyAction(currency || currencies[0]));
            dispatch(setAvailableCurrenciesAction(currencies));
        },
        onDataAvailable: (payload) => {
            dispatch(setDataAction(payload));
        },
        onHighlightDateDescription: (event) => {
            dispatch(setCurrentHighlightDescriptionAction(event.target.value));
        },
        onCurrentHighlightDateChange: (payload) => {
            dispatch(setCurrentHighlightDateAction(payload));
        },
        onCurrentHighlightSubmit: function () {
            dispatch(addHighLightAction({
                date: this.props.currentHighlight.date.format(DATE_FORMAT),
                description: this.props.currentHighlight.description,
            }));
            dispatch(currentHighlightResetAction());
        }
    }
}

class BPI extends Component {
    onCurrencyChange (event) {
        this.props.onCurrencyChange(event.target.value);
    }
    onCurrenciesAvailable (currencies) {
        this.props.onCurrenciesAvailable(currencies);
    }
    componentDidMount () {
        api.getCurrencies(this.onCurrenciesAvailable.bind(this));
        if (this.props.onComponentDidMount) {
            this.props.onComponentDidMount();
        }
        if (R.isNil(this.props.startDate) && this.props.onNilStartDate) {
            this.props.onNilStartDate();
        }
        if (R.isNil(this.props.endDate) && this.props.onNilEndDate) {
            this.props.onNilEndDate();
        }
    }
    onSubmit () {
        api.getData(this.props.startDate, this.props.endDate, this.props.currency, (data) => {
            this.props.onDataAvailable(data);
        });
    }
    render() {
        let availableCurrenciesOptions = null;
        const margin = {top: 20, right: 20, bottom: 30, left: 50};
        const highlights = this.props.highlights || [];

        if (this.props.availableCurrencies && this.props.availableCurrencies.length) {
            availableCurrenciesOptions = this.props.availableCurrencies.map(currency => {
                return <option key={currency} value={currency}>{currency}</option>;
            });
        }

        return (
            <div className="bpi">
                <header className="header">
                    <h1 className="title">Data to Vis</h1>
                    <h2 className="sub-title">Bitcoin price index chart</h2>
                </header>
                <div className="steps">
                    <div className="step">
                        <div className="header">
                            1. Select dates
                        </div>
                    </div>
                    <div className="cols">
                        <div className="col-half">
                                <DatePicker
                                    className="input"
                                    selected={this.props.startDate}
                                    onChange={this.props.onStartDateChange}
                                    maxDate={this.props.endDate}
                                    dateFormat={DATE_FORMAT}
                                    placeholderText="Click to select start date"
                                />
                            </div>
                            <div className="col-half">
                                <DatePicker
                                    className="input"
                                    selected={this.props.endDate}
                                    onChange={this.props.onEndDateChange}
                                    minDate={this.props.startDate}
                                    dateFormat={DATE_FORMAT}
                                    placeholderText="Click to select end date"
                                />
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
                                        <select className="input" value={this.props.currency} onChange={this.onCurrencyChange.bind(this)}>
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
                        </div>
                        <div className="cols">
                            <div className="col-full">
                                <button disabled={!(this.props.availableCurrencies && this.props.availableCurrencies.length)} onClick={this.onSubmit.bind(this)} className="input submit">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="step">
                        <div className="header">
                            Highlights
                        </div>
                        {
                            highlights.map((h, i) => {
                                return (
                                    <div className="cols" key={i}>
                                        <div className="col-half highlight">
                                            {h.date}
                                        </div>
                                        <div className="col-half highlight">
                                            {h.description}
                                        </div>
                                    </div>
                                )})
                            }
                        <div className="cols">
                            <div className="col-half">
                                <DatePicker
                                    className="input"
                                    selected={this.props.currentHighlight && this.props.currentHighlight.date}
                                    onChange={this.props.onCurrentHighlightDateChange}
                                    dateFormat={DATE_FORMAT}
                                    placeholderText="Click to highlight end date"
                                />
                            </div>
                            <div className="col-half">
                                <input className="input" onChange={this.props.onHighlightDateDescription} value={(this.props.currentHighlight && this.props.currentHighlight.description) || ''} placeholder="Highlight date description"/>
                            </div>
                            <div className="col-full">
                                <button disabled={!(this.props.currentHighlight && this.props.currentHighlight.date)} onClick={this.props.onCurrentHighlightSubmit && this.props.onCurrentHighlightSubmit.bind(this)} className="input submit">
                                    Submit
                                </button>
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
                            highlights={this.props.highlights}
                        />
                    ) : null
                }
                {
                    this.props.isLoading ? (<Loader/>) : null
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BPI);
export {BPI};