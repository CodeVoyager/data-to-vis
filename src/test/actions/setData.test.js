import setDataAction from '../../actions/setData';

describe('setDataAction', function () {
    const ACTION_NAME = 'SET_DATA';
    const DATA = [['DATE_1', 1], ['DATE_2', 2], ['DATE_3', 3]];

    it('should exist', function (done) {
        expect(setDataAction).not.toBeUndefined();

        done();
    });


    it('should return object', function (done) {
        expect(setDataAction()).toBeInstanceOf(Object);

        done();
    });


    it('should return valid action for supplied argument', function (done) {
        expect(setDataAction(undefined))
        .toEqual({
            type: ACTION_NAME,
            payload: []
        });

        expect(setDataAction(null))
        .toEqual({
            type: ACTION_NAME,
            payload: []
        });

        expect(setDataAction([]))
        .toEqual({
            type: ACTION_NAME,
            payload: []
        });

        expect(setDataAction(DATA))
        .toEqual({
            type: ACTION_NAME,
            payload: DATA
        });

        done();
    });


    it('should ignore additional arguments', function (done) {
        expect(setDataAction(DATA, 'Extra 1', 'Extra 2', 'Extra 3'))
        .toEqual({
            type: ACTION_NAME,
            payload: DATA
        });

        done();
    });

    it('should work in immutable fashion', function (done) {
        expect(setDataAction(DATA).data)
        .not.toBe(DATA);

        done();
    });


});
