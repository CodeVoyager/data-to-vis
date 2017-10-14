import endDate from '../../selectors/endDate'


describe('endDate selector', function () {

    it('should work on undefined state', function (done) {
        expect(endDate()).toBeUndefined();
        done();
    });

    it('should return undefined on undefined state', function (done) {
        expect(endDate()).toBeUndefined();
        done();
    });

    it('should return undefined on state without attribute "endDate"', function (done) {
        expect(endDate({})).toBeUndefined();
        done();
    });

    it('should return valid endDate', function (done) {
        const END_DATE = 'END_DATE';

        expect(endDate({
            endDate: END_DATE
        })).toEqual(END_DATE);

        done();
    });

});