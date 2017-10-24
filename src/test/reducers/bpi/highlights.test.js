import highlightsReducer from '../../../reducers/bpi/highlights';

describe('highlightsReducer', function () {
    const INITIAL_STATE = [];
    const date = '2017-10-31';

    it('should be present', function (done) {
        expect(highlightsReducer).not.toBeUndefined();
        done();
    });


    it('should return initial state on unknown action', function (done) {
        const state = highlightsReducer(undefined, {});

        expect(state).toEqual(INITIAL_STATE);

        done();
    });


    it('should return same state on unknown action', function (done) {
        const newState = highlightsReducer(INITIAL_STATE, {});

        expect(newState).toBe(INITIAL_STATE);

        done();
    });

    it('should return new valid state on BPI_ADD_HIGHLIGHT', function (done) {
        const oldState = [...INITIAL_STATE, {
            date: date,
            description: 'DESCRIPTION 1'
        }];
        const newState = highlightsReducer(oldState, {
            type: 'BPI_ADD_HIGHLIGHT',
            payload: {
                date: date,
                description: 'DESCRIPTION 2'
            }
        });

        expect(newState).not.toBe(oldState);
        expect(newState).not.toEqual(oldState);
        expect(newState).toEqual([
            {
                date: date,
                description: 'DESCRIPTION 1'
            },
            {
                date: date,
                description: 'DESCRIPTION 2'
            }
        ]);

        done();
    });

    it('should return new valid state on BPI_REMOVE_HIGHLIGHT', function (done) {
        const oldState = [...INITIAL_STATE, {
                date: date,
                description: 'DESCRIPTION 1'
            },
            {
                date: date,
                description: 'DESCRIPTION 2'
            }
        ];
        const newState = highlightsReducer(oldState, {
            type: 'BPI_REMOVE_HIGHLIGHT',
            payload: 0
        });

        expect(newState).not.toBe(oldState);
        expect(newState).not.toEqual(oldState);
        expect(newState).toEqual([
            {
                date: date,
                description: 'DESCRIPTION 2'
            }
        ]);

        done();
    });

    it('should return new valid state on BPI_SET_HIGHLIGHT', function (done) {
        const oldState = [...INITIAL_STATE, {
                date: date,
                description: 'DESCRIPTION 1'
            },
            {
                date: date,
                description: 'DESCRIPTION 2'
            }
        ];
        const newState = highlightsReducer(oldState, {
            type: 'BPI_SET_HIGHLIGHT',
            payload: []
        });

        expect(newState).not.toBe(oldState);
        expect(newState).not.toEqual(oldState);
        expect(newState).toEqual([]);

        done();
    });
});