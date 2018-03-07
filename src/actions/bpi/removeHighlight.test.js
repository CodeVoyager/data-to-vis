import removeHighLight from './removeHighLight';

describe('removeHighLight', function () {
    const ACTION_NAME = 'BPI_REMOVE_HIGHLIGHT';
    const DATA = 0;

    it('should exist', function (done) {
        expect(removeHighLight).not.toBeUndefined();

        done();
    });


    it('should return object', function (done) {
        expect(removeHighLight()).toBeInstanceOf(Object);

        done();
    });


    it('should return valid action for supplied argument', function (done) {
        expect(removeHighLight(undefined))
        .toEqual({
            type: ACTION_NAME,
            payload: null
        });

        expect(removeHighLight(null))
        .toEqual({
            type: ACTION_NAME,
            payload: null
        });

        expect(removeHighLight(DATA))
        .toEqual({
            type: ACTION_NAME,
            payload: DATA
        });

        done();
    });


    it('should ignore additional arguments', function (done) {
        expect(removeHighLight(DATA, 'Extra 1', 'Extra 2', 'Extra 3'))
        .toEqual({
            type: ACTION_NAME,
            payload: DATA
        });

        done();
    });
});
