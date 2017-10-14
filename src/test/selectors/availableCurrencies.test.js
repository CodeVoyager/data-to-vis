import availableCurrencies from '../../selectors/availableCurrencies'


describe('availableCurrencies selector', function () {

    it('should work on undefined state', function (done) {
        expect(availableCurrencies()).toBeUndefined();
        done();
    });

    it('should return undefined on undefined state', function (done) {
        expect(availableCurrencies()).toBeUndefined();
        done();
    });

    it('should return undefined on state without attribute "availableCurrencies"', function (done) {
        expect(availableCurrencies({})).toBeUndefined();
        done();
    });

    it('should return valid data', function (done) {
        const AVAILABLE_CURRENCIES = [];

        expect(availableCurrencies({
            availableCurrencies: AVAILABLE_CURRENCIES
        })).toEqual(AVAILABLE_CURRENCIES);

        done();
    });

});