import endDateReducer from '../../reducers/endDate';


describe('endDate reducer', function () {
    const INITIAL_STATE = null;

    it('should be present', function (done) {
        expect(endDateReducer).not.toBeUndefined();
        done();
    });

    it('should return defult state on not valid action', function (done) {
        const state = endDateReducer(undefined, {});

        expect(state).toBe(INITIAL_STATE);

        done();
    });


    it('should return state on unknown action', function (done) {
        const oldState = 'END_DATE';
        const newState = endDateReducer(oldState, {});

        expect(newState).toEqual(oldState);
        expect(newState).toBe(oldState);

        done();
    });


    it('should return new state on SET_END_DATE action', function (done) {
        const NEW_END_DATE = 'NEW_END_DATE';
        const oldState = INITIAL_STATE;
        const newState = endDateReducer(INITIAL_STATE, {
            type: 'SET_END_DATE',
            endDate: NEW_END_DATE
        });

        expect(newState).not.toBe(oldState);
        done();
    });

    it('should return new state with the same values as old state if supplied value is same as the old one', function (done) {
        const oldState = INITIAL_STATE;
        const newState = endDateReducer(INITIAL_STATE, {
            type: 'SET_END_DATE',
            endDate: INITIAL_STATE
        });

        expect(newState).toEqual(oldState);
        done();
    });


    it('should update endDate on SET_END_DATE action', function (done) {
        const NEW_END_DATE = 'NEW_END_DATE';

        const newState = endDateReducer(INITIAL_STATE, {
            type: 'SET_END_DATE',
            endDate: NEW_END_DATE
        });

        expect(newState).toBe(NEW_END_DATE);

        done();
    });

});