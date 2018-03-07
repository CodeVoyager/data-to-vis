import resetCurrentHighlight from './resetCurrentHighlight';

describe('resetCurrentHighlight', function () {
    const ACTION_NAME = 'BPI_SET_CURRENT_HIGHLIGHT_RESET';

    it('should exist', function (done) {
        expect(resetCurrentHighlight).not.toBeUndefined();

        done();
    });


    it('should return object', function (done) {
        expect(resetCurrentHighlight()).toBeInstanceOf(Object);

        done();
    });


    it('should return valid action for supplied argument', function (done) {
        expect(resetCurrentHighlight(undefined))
        .toEqual({
            type: ACTION_NAME,
        });

        expect(resetCurrentHighlight(null))
        .toEqual({
            type: ACTION_NAME,
        });

        done();
    });


    it('should ignore additional arguments', function (done) {
        expect(resetCurrentHighlight('Extra 1', 'Extra 2', 'Extra 3'))
        .toEqual({
            type: ACTION_NAME,
        });

        done();
    });
});
