import setCurrencyAction from '../../../actions/bpi/setCurrency';

describe('setCurrencyAction', function () {
    const ACTION_NAME = 'BPI_SET_CURRENCY';

    it('should exist', function (done) {
        expect(setCurrencyAction).not.toBeUndefined();

        done();
    });


    it('should return object', function (done) {
        expect(setCurrencyAction()).toBeInstanceOf(Object);

        done();
    });


    it('should return valid action for supplied argument', function (done) {
        expect(setCurrencyAction(undefined))
        .toEqual({
            type: ACTION_NAME,
            payload: null
        });

        expect(setCurrencyAction(null))
        .toEqual({
            type: ACTION_NAME,
            payload: null
        });

        expect(setCurrencyAction('CURRENCY'))
        .toEqual({
            type: ACTION_NAME,
            payload: 'CURRENCY'
        });

        done();
    });


    it('should ignore additional arguments', function (done) {
        expect(setCurrencyAction('CURRENCY', 'Extra 1', 'Extra 2', 'Extra 3'))
        .toEqual({
            type: ACTION_NAME,
            payload: 'CURRENCY'
        });

        done();
    });


});
