import availableCurrencies from '../../../selectors/bpi/availableCurrencies'


describe('availableCurrencies selector', function () {

    it('should exist', function (done) {
        expect(availableCurrencies).not.toBeUndefined()
        done();
    });

    it('should work on undefined state', function (done) {
        expect(availableCurrencies()).toEqual([]);
        done();
    });

    it('should return undefined on undefined state', function (done) {
        expect(availableCurrencies()).toEqual([]);
        done();
    });

    it('should return undefined on state without attribute "availableCurrencies"', function (done) {
        expect(availableCurrencies({})).toEqual([]);
        expect(availableCurrencies({bpi: {}})).toEqual([]);
        done();
    });

    it('should return valid data', function (done) {
        const AVAILABLE_CURRENCIES = [];

        expect(availableCurrencies({
            bpi: {
                availableCurrencies: AVAILABLE_CURRENCIES
            }
        })).toEqual(AVAILABLE_CURRENCIES);

        done();
    });

});