import setEndDateAction from '../../actions/setEndDate';

describe('setEndDateAction', function () {
    const ACTION_NAME = 'SET_END_DATE';

    it('should exist', function (done) {
        expect(setEndDateAction).not.toBeUndefined();

        done();
    });


    it('should return object', function (done) {
        expect(setEndDateAction()).toBeInstanceOf(Object);

        done();
    });


    it('should return valid action for supplied argument', function (done) {
        expect(setEndDateAction(undefined))
        .toEqual({
            type: ACTION_NAME,
            endDate: null
        });

        expect(setEndDateAction(null))
        .toEqual({
            type: ACTION_NAME,
            endDate: null
        });

        expect(setEndDateAction('END_DATE'))
        .toEqual({
            type: ACTION_NAME,
            endDate: 'END_DATE'
        });

        done();
    });


    it('should ignore additional arguments', function (done) {
        expect(setEndDateAction('END_DATE', 'Extra 1', 'Extra 2', 'Extra 3'))
        .toEqual({
            type: ACTION_NAME,
            endDate: 'END_DATE'
        });

        done();
    });


});
