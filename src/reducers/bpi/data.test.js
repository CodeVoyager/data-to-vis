import dataReducer from './data';

describe('dataReducer', function () {
    const INITIAL_STATE = [];

    it('should be present', function (done) {
        expect(dataReducer).not.toBeUndefined();
        done();
    });


    it('should return initial state on unknown action', function (done) {
        const state = dataReducer(undefined, {});

        expect(state).toEqual(INITIAL_STATE);

        done();
    });


    it('should return same state on unknown action', function (done) {
        const newState = dataReducer(INITIAL_STATE, {});

        expect(newState).toBe(INITIAL_STATE);

        done();
    });

    it('should return new state on BPI_SET_DATA', function (done) {
        const oldState = INITIAL_STATE;
        const newState = dataReducer(oldState, {
            type: 'BPI_SET_DATA',
            payload: [['DATE_1', 1], ['DATE_2', 2], ['DATE_3', 3]]
        });

        expect(newState).not.toBe(oldState);
        expect(newState).not.toEqual(oldState);

        done();
    });


});