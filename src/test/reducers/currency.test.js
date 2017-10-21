import currencyReducer from '../../reducers/currency';


describe('Currency reducer', function () {

    const INITIAL_STATE = null;
    const CURRENCY = 'CURRENCY';

    it('should be present', function (done) {

        expect(currencyReducer).not.toBeUndefined();

        done();
    });


    it('should return initial state on unknown action', function (done) {
        const state = currencyReducer(undefined, {});

        expect(state).toEqual(INITIAL_STATE);

        done();
    });


    it('should return same state on unknown action', function (done) {
        const newState = currencyReducer(INITIAL_STATE, {});

        expect(newState).toBe(INITIAL_STATE);

        done();
    });


    it('should return new state on SET_CURRENCY', function (done) {
        const oldState = INITIAL_STATE;
        const newState = currencyReducer(oldState, {
            type: 'SET_CURRENCY',
            payload: CURRENCY
        });

        expect(newState).not.toBe(oldState);

        done();
    });

    it('should return new updated state on SET_CURRENCY', function (done) {
        const oldState = INITIAL_STATE;
        const newState = currencyReducer(oldState, {
            type: 'SET_CURRENCY',
            payload: 'NEW_CURRENCY'
        });

        expect(newState).not.toEqual(oldState);
        expect(newState).not.toBe(oldState);
        expect(newState).toEqual('NEW_CURRENCY');

        done();
    });
});