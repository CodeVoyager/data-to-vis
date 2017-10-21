import endDate from '../../../selectors/bpi/endDate'


describe('endDate selector', function () {

    it('should exist', function (done) {
        expect(endDate).not.toBeUndefined()
        done();
    });

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
        expect(endDate({bpi: {}})).toBeUndefined();
        done();
    });

    it('should return valid endDate', function (done) {
        const END_DATE = 'END_DATE';

        expect(endDate({
            bpi: {
                endDate: END_DATE
            }
        })).toEqual(END_DATE);

        done();
    });

});