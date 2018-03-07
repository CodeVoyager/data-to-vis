import chartType from './/chartType'


describe('chartType selector', function () {

    it('should exist', function (done) {
        expect(chartType).not.toBeUndefined()
        done();
    });

    it('should work on undefined state', function (done) {
        expect(chartType()).toBeNull();
        done();
    });

    it('should return undefined on undefined state', function (done) {
        expect(chartType()).toBeNull();
        done();
    });

    it('should return undefined on state without attribute "chartType"', function (done) {
        expect(chartType({})).toBeNull();
        expect(chartType({bpi: {}})).toBeNull();
        done();
    });

    it('should return valid data', function (done) {
        const CHART_TYPE = 'CHART_TYPE';

        expect(chartType({
            bpi: {
                chartType: CHART_TYPE
            }
        })).toEqual(CHART_TYPE);

        done();
    });

});