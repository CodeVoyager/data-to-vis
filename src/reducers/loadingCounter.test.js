import loadingCounterReducer from './loadingCounter';


describe('loadingCounterReducer', function () {

    const INITIAL_STATE = 0;

    it('should be present', function (done) {
        expect(loadingCounterReducer).not.toBeUndefined();
        done();
    });


    it('should be present', function (done) {

        expect(loadingCounterReducer).not.toBeUndefined();

        done();
    });


    it('should return initial state on unknown action', function (done) {
        const state = loadingCounterReducer(undefined, {});

        expect(state).toEqual(INITIAL_STATE);

        done();
    });


    it('should return same state on unknown action', function (done) {
        const newState = loadingCounterReducer(INITIAL_STATE, {});

        expect(newState).toBe(INITIAL_STATE);

        done();
    });


    it('should increment state on START_LOADING', function (done) {
        const oldState = INITIAL_STATE;
        const newState = loadingCounterReducer(oldState, {
            type: 'START_LOADING'
        });

        expect(newState).toBe(oldState + 1);

        done();
    });

    it('should decrement state on STOP_LOADING', function (done) {
        const oldState = INITIAL_STATE + 1;
        const newState = loadingCounterReducer(oldState, {
            type: 'STOP_LOADING'
        });

        expect(newState).toBe(oldState - 1);

        done();
    });

    it('should NOT decrement state below 0 on STOP_LOADING', function (done) {
        const oldState = INITIAL_STATE;
        const newState = loadingCounterReducer(oldState, {
            type: 'STOP_LOADING'
        });

        expect(newState).toBeGreaterThan(-1);

        done();
    });


});