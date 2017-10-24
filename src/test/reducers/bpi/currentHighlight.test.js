import currentHighlightReducer from '../../../reducers/bpi/currentHighlight';
import moment from 'moment';

describe('currentHighlightReducer', function () {
    const INITIAL_STATE = {
        date: null,
        description: null
    };
    const date = moment('20171031', 'YYYYMMDD');
    const description = 'DESCRIPTION';

    it('should be present', function (done) {
        expect(currentHighlightReducer).not.toBeUndefined();
        done();
    });


    it('should return initial state on unknown action', function (done) {
        const state = currentHighlightReducer(undefined, {});

        expect(state).toEqual(INITIAL_STATE);

        done();
    });


    it('should return same state on unknown action', function (done) {
        const newState = currentHighlightReducer(INITIAL_STATE, {});

        expect(newState).toBe(INITIAL_STATE);

        done();
    });

    it('should return new valid state on BPI_SET_CURRENT_HIGHLIGHT_DATE', function (done) {
        const oldState = Object.assign({}, INITIAL_STATE);
        const newState = currentHighlightReducer(oldState, {
            type: 'BPI_SET_CURRENT_HIGHLIGHT_DATE',
            payload: date
        });

        expect(newState).not.toBe(oldState);
        expect(newState).not.toEqual(oldState);
        expect(newState.date.format('YYYYMMDD')).toEqual(date.format('YYYYMMDD'));

        done();
    });

    it('should return new valid state on BPI_SET_CURRENT_HIGHLIGHT_DESCRIPTION', function (done) {
        const oldState = Object.assign({}, INITIAL_STATE);
        const newState = currentHighlightReducer(oldState, {
            type: 'BPI_SET_CURRENT_HIGHLIGHT_DESCRIPTION',
            payload: 'DESCRIPTION'
        });

        expect(newState).not.toBe(oldState);
        expect(newState).not.toEqual(oldState);
        expect(newState.description).toEqual('DESCRIPTION');

        done();
    });

    it('should return new valid state on BPI_SET_CURRENT_HIGHLIGHT_RESET', function (done) {
        const oldState = {
            date,
            description,
        };
        const newState = currentHighlightReducer(oldState, {
            type: 'BPI_SET_CURRENT_HIGHLIGHT_RESET'
        });

        expect(newState).not.toBe(oldState);
        expect(newState).toEqual({
            date: null,
            description: null,
        });

        done();
    });
});