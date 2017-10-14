import startDateReducer from '../../reducers/startDate';


describe('startDate reducer', function () {
    const INITIAL_STATE = null;

    it('should be present', function (done) {
        expect(startDateReducer).not.toBeUndefined();
        done();
    });

    it('should return defult state on not valid action', function (done) {
        const state = startDateReducer(undefined, {});

        expect(state).toBe(INITIAL_STATE);

        done();
    });


    it('should return state on unknown action', function (done) {
        const oldState = 'START_DATE';
        const newState = startDateReducer(oldState, {});

        expect(newState).toEqual(oldState);
        expect(newState).toBe(oldState);

        done();
    });


    it('should return new state on SET_START_DATE action', function (done) {
        const NEW_START_DATE = 'NEW_START_DATE';
        const oldState = INITIAL_STATE;
        const newState = startDateReducer(INITIAL_STATE, {
            type: 'SET_START_DATE',
            startDate: NEW_START_DATE
        });

        expect(newState).not.toBe(oldState);
        done();
    });

    it('should return new state with the same values as old state if supplied value is same as the old one', function (done) {
        const oldState = INITIAL_STATE;
        const newState = startDateReducer(INITIAL_STATE, {
            type: 'SET_START_DATE',
            startDate: INITIAL_STATE
        });

        expect(newState).toEqual(oldState);
        done();
    });


    it('should update startDate on SET_START_DATE action', function (done) {
        const NEW_START_DATE = 'NEW_START_DATE';

        const newState = startDateReducer(INITIAL_STATE, {
            type: 'SET_START_DATE',
            startDate: NEW_START_DATE
        });

        expect(newState).toBe(NEW_START_DATE);

        done();
    });

});