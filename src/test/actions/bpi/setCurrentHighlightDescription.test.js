import setCurrentHighlightDescription from '../../../actions/bpi/setCurrentHighlightDescription';

describe('setCurrentHighlightDescription', function () {
    const ACTION_NAME = 'BPI_SET_CURRENT_HIGHLIGHT_DESCRIPTION';
    const DATA = 'DESCRIPTION';

    it('should exist', function (done) {
        expect(setCurrentHighlightDescription).not.toBeUndefined();

        done();
    });


    it('should return object', function (done) {
        expect(setCurrentHighlightDescription()).toBeInstanceOf(Object);

        done();
    });


    it('should return valid action for supplied argument', function (done) {
        expect(setCurrentHighlightDescription(undefined))
        .toEqual({
            type: ACTION_NAME,
            payload: null
        });

        expect(setCurrentHighlightDescription(null))
        .toEqual({
            type: ACTION_NAME,
            payload: null
        });

        expect(setCurrentHighlightDescription(DATA))
        .toEqual({
            type: ACTION_NAME,
            payload: DATA
        });

        done();
    });


    it('should ignore additional arguments', function (done) {
        expect(setCurrentHighlightDescription(DATA, 'Extra 1', 'Extra 2', 'Extra 3'))
        .toEqual({
            type: ACTION_NAME,
            payload: DATA
        });

        done();
    });
});
