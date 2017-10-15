import setAvailableCurrenciesAction from '../../actions/setAvailableCurrencies';

describe('setAvailableCurrenciesAction', function () {
    const ACTION_NAME = 'SET_AVAILABLE_CURRENCIES';
    const AVAILABLE_CURRENCIES = ['AVAILABLE_CURRENCIES 1', 'AVAILABLE_CURRENCIES 2', 'AVAILABLE_CURRENCIES 3'];

    it('should exist', function (done) {
        expect(setAvailableCurrenciesAction).not.toBeUndefined();

        done();
    });


    it('should return object', function (done) {
        expect(setAvailableCurrenciesAction()).toBeInstanceOf(Object);

        done();
    });


    it('should return valid action for supplied argument', function (done) {
        expect(setAvailableCurrenciesAction(undefined))
        .toEqual({
            type: ACTION_NAME,
            currencies: []
        });

        expect(setAvailableCurrenciesAction(null))
        .toEqual({
            type: ACTION_NAME,
            currencies: []
        });

        expect(setAvailableCurrenciesAction([]))
        .toEqual({
            type: ACTION_NAME,
            currencies: []
        });

        expect(setAvailableCurrenciesAction(AVAILABLE_CURRENCIES))
        .toEqual({
            type: ACTION_NAME,
            currencies: AVAILABLE_CURRENCIES
        });

        done();
    });


    it('should ignore additional arguments', function (done) {
        expect(setAvailableCurrenciesAction(AVAILABLE_CURRENCIES, 'Extra 1', 'Extra 2', 'Extra 3'))
        .toEqual({
            type: ACTION_NAME,
            currencies: AVAILABLE_CURRENCIES
        });

        done();
    });

    it('should work in immutable fashion', function (done) {
        expect(setAvailableCurrenciesAction(AVAILABLE_CURRENCIES).availableCurrencies)
        .not.toBe(AVAILABLE_CURRENCIES);

        done();
    });


});
