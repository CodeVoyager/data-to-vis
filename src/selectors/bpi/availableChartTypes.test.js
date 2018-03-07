import availableChartTypes from './/availableChartTypes'

describe('BPI availableChartTypes selector', function () {
    const INITIAL_STATE = ['line', 'bar']

    it('should exist', function (done) {
        expect(availableChartTypes).not.toBeUndefined()
        done();
    });

    it('should work on undefined state', function (done) {
        expect(availableChartTypes()).toEqual([]);
        done();
    });

    it('should return undefined on undefined state', function (done) {
        expect(availableChartTypes()).toEqual([]);
        done();
    });

    it('should return undefined on state without attribute "availableChartTypes"', function (done) {
        expect(availableChartTypes({})).toEqual([]);
        expect(availableChartTypes({bpi: {}})).toEqual([]);
        done();
    });

    it('should return valid data', function (done) {
        const AVAILABLE_CURRENCIES = INITIAL_STATE;

        expect(availableChartTypes({
            bpi: {
                availableChartTypes: AVAILABLE_CURRENCIES
            }
        })).toEqual(AVAILABLE_CURRENCIES);

        done();
    });

});