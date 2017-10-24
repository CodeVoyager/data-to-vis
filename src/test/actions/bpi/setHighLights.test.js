import setHighLights from '../../../actions/bpi/setHighLights';
import moment from 'moment';

describe('setHighLights', function () {
    const ACTION_NAME = 'BPI_SET_HIGHLIGHT';
    const date = '2017-10-31';
    const DATA = [{
        date: date,
        description: 'DESCRIPTION 1'
    }, {
        date: date,
        description: 'DESCRIPTION 2'
    }];

    it('should exist', function (done) {
        expect(setHighLights).not.toBeUndefined();

        done();
    });


    it('should return object', function (done) {
        expect(setHighLights()).toBeInstanceOf(Object);

        done();
    });


    it('should return valid action for supplied argument', function (done) {
        expect(setHighLights(undefined))
        .toEqual({
            type: ACTION_NAME,
            payload: null
        });

        expect(setHighLights(null))
        .toEqual({
            type: ACTION_NAME,
            payload: null
        });

        expect(setHighLights(DATA))
        .toEqual({
            type: ACTION_NAME,
            payload: DATA
        });

        done();
    });


    it('should ignore additional arguments', function (done) {
        expect(setHighLights(DATA, 'Extra 1', 'Extra 2', 'Extra 3'))
        .toEqual({
            type: ACTION_NAME,
            payload: DATA
        });

        done();
    });

    it('should work in immutable fashion', function (done) {
        expect(setHighLights(DATA).payload)
        .not.toBe(DATA);

        done();
    });


});
