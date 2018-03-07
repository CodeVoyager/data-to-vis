import addHighLight from './addHighLight';
import moment from 'moment';

describe('addHighLight', function () {
    const ACTION_NAME = 'BPI_ADD_HIGHLIGHT';
    const date = '2017-10-31';
    const description = 'DESCRIPTION';
    const DATA = {
        date: date,
        description
    };

    it('should exist', function (done) {
        expect(addHighLight).not.toBeUndefined();

        done();
    });


    it('should return object', function (done) {
        expect(addHighLight()).toBeInstanceOf(Object);

        done();
    });


    it('should return valid action for supplied argument', function (done) {
        expect(addHighLight(undefined))
        .toEqual({
            type: ACTION_NAME,
            payload: null
        });

        expect(addHighLight(null))
        .toEqual({
            type: ACTION_NAME,
            payload: null
        });

        expect(addHighLight(DATA))
        .toEqual({
            type: ACTION_NAME,
            payload: DATA
        });

        done();
    });


    it('should ignore additional arguments', function (done) {
        expect(addHighLight(DATA, 'Extra 1', 'Extra 2', 'Extra 3'))
        .toEqual({
            type: ACTION_NAME,
            payload: DATA
        });

        done();
    });

    it('should work in immutable fashion', function (done) {
        expect(addHighLight(DATA).payload)
        .not.toBe(DATA);

        done();
    });


});
