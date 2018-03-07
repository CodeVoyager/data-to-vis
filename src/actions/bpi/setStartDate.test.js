import setStartDateAction from './setStartDate';


describe('setStartDateAction', function () {
    const ACTION_NAME = 'BPI_SET_START_DATE';

    it('should exist', function (done) {
        expect(setStartDateAction).not.toBeUndefined();

        done();
    });


    it('should return object', function (done) {
        expect(setStartDateAction()).toBeInstanceOf(Object);

        done();
    });


    it('should return valid action for supplied argument', function (done) {
        expect(setStartDateAction(undefined))
        .toEqual({
            type: ACTION_NAME,
            payload: null
        });

        expect(setStartDateAction(null))
        .toEqual({
            type: ACTION_NAME,
            payload: null
        });

        expect(setStartDateAction('START_DATE'))
        .toEqual({
            type: ACTION_NAME,
            payload: 'START_DATE'
        });

        done();
    });


    it('should ignore additional arguments', function (done) {
        expect(setStartDateAction('START_DATE', 'Extra 1', 'Extra 2', 'Extra 3'))
        .toEqual({
            type: ACTION_NAME,
            payload: 'START_DATE'
        });

        done();
    });


});
