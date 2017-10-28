import {
    setAvailableCurrencies,
    setCurrency,
    setEndDate,
    setStartDate,
    setData,
    setHighLights,
    setCurrentHighlightDate,
    setCurrentHighlightDescription,
    resetCurrentHighlight,
    addHighLight,
} from '../../../../actions/bpi';
import find from 'ramda/src/find';
import equals from 'ramda/src/equals';
import {
    PREFERED_CURRENCY,
    DATE_FORMAT
} from '../../../../config'
import moment from 'moment';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onComponentDidMount: () => {
            dispatch(setHighLights([
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
            dispatch(setStartDate(moment().subtract(5, 'years')));
        },
        onNilEndDate: () => {
            dispatch(setEndDate(moment()));
        },
        onEndDateChange: (date) => {
            dispatch(setEndDate(date));
        },
        onStartDateChange: (date) => {
            dispatch(setStartDate(date));
        },
        onCurrencyChange: (currency) => {
            dispatch(setCurrency(currency));
        },
        onCurrenciesAvailable: (currencies) => {
            let currency = find(equals(PREFERED_CURRENCY), currencies);

            dispatch(setCurrency(currency || currencies[0]));
            dispatch(setAvailableCurrencies(currencies));
        },
        onDataAvailable: (payload) => {
            dispatch(setData(payload));
        },
        onHighlightDateDescription: (event) => {
            dispatch(setCurrentHighlightDescription(event.target.value));
        },
        onCurrentHighlightDateChange: (payload) => {
            dispatch(setCurrentHighlightDate(payload));
        },
        onCurrentHighlightSubmit: function () {
            dispatch(addHighLight({
                date: this.props.currentHighlight.date.format(DATE_FORMAT),
                description: this.props.currentHighlight.description,
            }));
            dispatch(resetCurrentHighlight());
        }
    }
}

export default mapDispatchToProps;