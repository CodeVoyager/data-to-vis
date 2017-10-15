import currency from '../../selectors/currency'


describe('currency selector', function () {

    it('should exist', function (done) {
        expect(currency).not.toBeUndefined()
        done();
    });

    it('should work on undefined state', function (done) {
        expect(currency()).toBeUndefined();
        done();
    });

    it('should return undefined on undefined state', function (done) {
        expect(currency()).toBeUndefined();
        done();
    });

    it('should return undefined on state without attribute "currency"', function (done) {
        expect(currency({})).toBeUndefined();
        done();
    });

    it('should return valid data', function (done) {
        const CURRENCY = 'CURRENCY';

        expect(currency({
            currency: CURRENCY
        })).toEqual(CURRENCY);

        done();
    });

});