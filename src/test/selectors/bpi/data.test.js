import data from '../../../selectors/bpi/data'


describe('data selector', function () {

    it('should exist', function (done) {
        expect(data).not.toBeUndefined()
        done();
    });

    it('should work on undefined state', function (done) {
        expect(data()).toBeUndefined();
        done();
    });

    it('should return undefined on undefined state', function (done) {
        expect(data()).toBeUndefined();
        done();
    });

    it('should return undefined on state without attribute "data"', function (done) {
        expect(data({})).toBeUndefined();
        expect(data({bpi: {}})).toBeUndefined();
        done();
    });

    it('should return valid data', function (done) {
        const DATA = [];

        expect(data({
            bpi: {
                data: DATA
            }
        })).toEqual(DATA);

        done();
    });

});