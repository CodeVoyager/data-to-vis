import setCurrentHighlightDate from './setCurrentHighlightDate';

describe('setCurrentHighlightDate', function () {
    const ACTION_NAME = 'BPI_SET_CURRENT_HIGHLIGHT_DATE';
    const DATA = '2017-10-31';

    it('should exist', function (done) {
        expect(setCurrentHighlightDate).not.toBeUndefined();

        done();
    });


    it('should return object', function (done) {
        expect(setCurrentHighlightDate()).toBeInstanceOf(Object);

        done();
    });


    it('should return valid action for supplied argument', function (done) {
        expect(setCurrentHighlightDate(undefined))
        .toEqual({
            type: ACTION_NAME,
            payload: null
        });

        expect(setCurrentHighlightDate(null))
        .toEqual({
            type: ACTION_NAME,
            payload: null
        });

        expect(setCurrentHighlightDate(DATA))
        .toEqual({
            type: ACTION_NAME,
            payload: DATA
        });

        done();
    });


    it('should ignore additional arguments', function (done) {
        expect(setCurrentHighlightDate(DATA, 'Extra 1', 'Extra 2', 'Extra 3'))
        .toEqual({
            type: ACTION_NAME,
            payload: DATA
        });

        done();
    });
});
