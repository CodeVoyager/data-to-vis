import mapStateToProps from './mapStateToProps';
import moment from 'moment';


describe('BPI mapStateToProps', () => {

    it('should produce valid results for empty state', () => {
        const state = {};

        expect(mapStateToProps())
            .toEqual({
                availableCurrencies: [],
                currency: null,
                data: [],
                startDate: null,
                endDate: null,
                isLoading: false,
                highlights: [],
                currentHighlight: null,
                chartType: null,
                availableChartTypes: [],
            });
            expect(mapStateToProps(state))
            .toEqual({
                availableCurrencies: [],
                currency: null,
                data: [],
                startDate: null,
                endDate: null,
                isLoading: false,
                highlights: [],
                currentHighlight: null,
                chartType: null,
                availableChartTypes: [],
            });
    });

    it('should produce valid results for valid state', () => {
        const state1 = {
            loadingCounter: 0,
            bpi: {
                availableCurrencies: ['USD'],
                currency: 'USD',
                data: [],
                startDate: moment('20171021', 'YYYYMMDD'),
                endDate: moment('20171023', 'YYYYMMDD'),
                highlights: [],
                currentHighlight: null,
                chartType: 'CHART_TYPE',
                availableChartTypes: ['CHART_TYPE'],
            }
        };
        const state2 = {
            loadingCounter: 4,
            bpi: {
                availableCurrencies: ['USD'],
                currency: 'USD',
                data: [],
                startDate: moment('20171021', 'YYYYMMDD'),
                endDate: moment('20171023', 'YYYYMMDD'),
                highlights: [],
                currentHighlight: {
                    date: moment('20171022', 'YYYYMMDD'),
                    description: 'DESCRIPTION'
                },
                chartType: 'CHART_TYPE',
                availableChartTypes: ['CHART_TYPE'],
            }
        };

        expect(mapStateToProps(state1))
            .toEqual({
                availableCurrencies: ['USD'],
                currency: 'USD',
                data: [],
                startDate: moment('20171021', 'YYYYMMDD'),
                endDate: moment('20171023', 'YYYYMMDD'),
                isLoading: false,
                highlights: [],
                currentHighlight: null,
                chartType: 'CHART_TYPE',
                availableChartTypes: ['CHART_TYPE'],
            });

        expect(mapStateToProps(state2))
            .toEqual({
                availableCurrencies: ['USD'],
                currency: 'USD',
                data: [],
                startDate: moment('20171021', 'YYYYMMDD'),
                endDate: moment('20171023', 'YYYYMMDD'),
                isLoading: true,
                highlights: [],
                currentHighlight: {
                    date: moment('20171022', 'YYYYMMDD'),
                    description: 'DESCRIPTION'
                },
                chartType: 'CHART_TYPE',
                availableChartTypes: ['CHART_TYPE'],
            });

        expect(mapStateToProps(state1)).toMatchSnapshot();
        expect(mapStateToProps(state2)).toMatchSnapshot();
    });

});
