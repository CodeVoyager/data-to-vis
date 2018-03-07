import availableCurrenciesReducer from './availableCurrencies';


describe('availableCurrenciesReducer', function () {

    const INITIAL_STATE = [];

    it('should be available', function (done) {
        expect(availableCurrenciesReducer).not.toBeUndefined();
        done();
    });


    it('should return initial state on unknown action', function (done) {
        const newState = availableCurrenciesReducer(undefined, {});

        expect(newState).toEqual(INITIAL_STATE);

        done();
    });


    it('should return same state on unknown action', function (done) {
        const oldState = [...INITIAL_STATE];
        const newState = availableCurrenciesReducer(oldState, {});

        expect(newState).toEqual(oldState);
        expect(newState).toBe(oldState);

        done();
    });

    it('should return new state on BPI_SET_AVAILABLE_CURRENCIES', function (done) {
        const oldState = [...INITIAL_STATE];
        const newState = availableCurrenciesReducer(oldState, {
            type: 'BPI_SET_AVAILABLE_CURRENCIES',
            payload: [
                'CURRENCY_1',
                'CURRENCY_2',
                'CURRENCY_3',
            ]
        });

        expect(newState).not.toEqual(oldState);
        expect(newState).not.toBe(oldState);

        done();
    });


});
