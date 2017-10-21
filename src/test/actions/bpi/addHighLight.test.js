import setDataAction from '../../../actions/bpi/addHighLight';
import moment from 'moment';

describe('setDataAction', function () {
    const ACTION_NAME = 'BPI_ADD_HIGHLIGHT';
    const date = moment('20171031', 'YYYYMMDD');
    const description = 'DESCRIPTION';
    const DATA = {
        date: date,
        description
    };

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
            payload: null
        });

        expect(setDataAction(null))
        .toEqual({
            type: ACTION_NAME,
            payload: null
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
        expect(setDataAction(DATA).payload)
        .not.toBe(DATA);

        done();
    });


});
