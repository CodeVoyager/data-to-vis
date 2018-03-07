import setChartTypeAction from './setChartType';

describe('setChartTypeAction', function () {
    const ACTION_NAME = 'BPI_SET_CHART_TYPE';

    it('should exist', function (done) {
        expect(setChartTypeAction).not.toBeUndefined();

        done();
    });


    it('should return object', function (done) {
        expect(setChartTypeAction()).toBeInstanceOf(Object);

        done();
    });


    it('should return valid action for supplied argument', function (done) {
        expect(setChartTypeAction(undefined))
        .toEqual({
            type: ACTION_NAME,
            payload: null
        });

        expect(setChartTypeAction(null))
        .toEqual({
            type: ACTION_NAME,
            payload: null
        });

        expect(setChartTypeAction('CHART_TYPE'))
        .toEqual({
            type: ACTION_NAME,
            payload: 'CHART_TYPE'
        });

        done();
    });


    it('should ignore additional arguments', function (done) {
        expect(setChartTypeAction('CHART_TYPE', 'Extra 1', 'Extra 2', 'Extra 3'))
        .toEqual({
            type: ACTION_NAME,
            payload: 'CHART_TYPE'
        });

        done();
    });


});
