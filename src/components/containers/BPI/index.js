import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {connect} from 'react-redux'
import api from '../../../api/bpi'
import {
    DATE_FORMAT
} from '../../../config'
import Loader from '../../presentational/Loader';
import Chart from '../../presentational/Chart';
import isNil from 'ramda/src/isNil'
import {
    mapDispatchToProps,
    mapStateToProps
} from './connect'

class BPI extends Component {
    onCurrencyChange (event) {
        this.props.onCurrencyChange(event.target.value);
    }
    onCurrenciesAvailable (currencies) {
        if (this.props.onCurrenciesAvailable) {
            this.props.onCurrenciesAvailable(currencies);
        }
    }
    componentDidMount () {
        api.getCurrencies(this.onCurrenciesAvailable.bind(this));
        if (this.props.onComponentDidMount) {
            this.props.onComponentDidMount();
        }
        if (isNil(this.props.startDate) && this.props.onNilStartDate) {
            this.props.onNilStartDate();
        }
        if (isNil(this.props.endDate) && this.props.onNilEndDate) {
            this.props.onNilEndDate();
        }
    }
    onSubmit () {
        api.getData(this.props.startDate, this.props.endDate, this.props.currency, (data) => {
            this.props.onDataAvailable(data);
        });
    }
    render() {
        const margin = {top: 20, right: 20, bottom: 30, left: 50};
        const highlights = this.props.highlights || [];

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
                                            {
                                                this.props.availableCurrencies.map(currency => {
                                                    return <option key={currency} value={currency}>{currency}</option>;
                                                })
                                            }
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
                                <button disabled={!(this.props.currentHighlight && this.props.currentHighlight.date)} onClick={this.props.onCurrentHighlightSubmit && this.props.onCurrentHighlightSubmit.bind(this)} className="input submit current-highlight">
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