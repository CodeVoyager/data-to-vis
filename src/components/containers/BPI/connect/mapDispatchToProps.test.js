import mapDispatchToProps from './mapDispatchToProps';
import moment from 'moment';

describe('BPI connect mapDispatchToProps', () => {
    it('should exist', () => {
        expect(mapDispatchToProps).not.toBeUndefined();
    });


    it('should should pass valid actions dispatch', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        const DATE = moment('20171021', 'YYYYMMDD');
        const CURRENCY = 'USD';
        const CURRENCIES1 = ['USD', 'BGP'];
        const CURRENCIES2 = ['CURRENCY1', 'CURRENCY2'];
        const DATA = [];
        const EVENT = {
            target: {
                value: 'DESCRIPTION'
            }
        };
        const HIGHLIGHT = {
            date: DATE,
            description: EVENT.target.value
        }
        const CHART_TYPE = 'CHART_TYPE';
        const CHART_TYPE_CHANGE_EVENT = {
            target: {
                value: CHART_TYPE
            }
        };

        moment.prototype.toJSON = function () {
            return this.format('YYYYMMDD');
        }

        props.onComponentDidMount();
        props.onNilStartDate();
        props.onNilEndDate();
        props.onEndDateChange(DATE);
        props.onStartDateChange(DATE);
        props.onCurrencyChange(CURRENCY);
        props.onCurrenciesAvailable(CURRENCIES1);
        props.onCurrenciesAvailable(CURRENCIES2);
        props.onDataAvailable(DATA);
        props.onHighlightDateDescription(EVENT);
        props.onCurrentHighlightDateChange(HIGHLIGHT);
        props.onCurrentHighlightSubmit.bind({
            props: {
                currentHighlight: HIGHLIGHT
            }
        })(HIGHLIGHT);
        props.onChartTypeChange(CHART_TYPE_CHANGE_EVENT);

        dispatch.mock.calls.forEach((params) => {
            expect(params).toMatchSnapshot();
        });
    });


});
