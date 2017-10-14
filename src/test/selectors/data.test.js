import data from '../../selectors/data'


describe('data selector', function () {

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
        done();
    });

    it('should return valid data', function (done) {
        const DATA = [];

        expect(data({
            data: DATA
        })).toEqual(DATA);

        done();
    });

});