import currentHighlightReset from '../../../actions/bpi/currentHighlightReset';

describe('currentHighlightReset', function () {
    const ACTION_NAME = 'BPI_SET_CURRENT_HIGHLIGHT_RESET';

    it('should exist', function (done) {
        expect(currentHighlightReset).not.toBeUndefined();

        done();
    });


    it('should return object', function (done) {
        expect(currentHighlightReset()).toBeInstanceOf(Object);

        done();
    });


    it('should return valid action for supplied argument', function (done) {
        expect(currentHighlightReset(undefined))
        .toEqual({
            type: ACTION_NAME,
        });

        expect(currentHighlightReset(null))
        .toEqual({
            type: ACTION_NAME,
        });

        done();
    });


    it('should ignore additional arguments', function (done) {
        expect(currentHighlightReset('Extra 1', 'Extra 2', 'Extra 3'))
        .toEqual({
            type: ACTION_NAME,
        });

        done();
    });
});
