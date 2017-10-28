import startDate from '../../../selectors/bpi/startDate'


describe('startDate selector', function () {

    it('should exist', function (done) {
        expect(startDate).not.toBeUndefined()
        done();
    });

    it('should work on undefined state', function (done) {
        expect(startDate()).toBeNull();
        done();
    });

    it('should return undefined on undefined state', function (done) {
        expect(startDate()).toBeNull();
        done();
    });

    it('should return undefined on state without attribute "startDate"', function (done) {
        expect(startDate({})).toBeNull();
        expect(startDate({bpi: {}})).toBeNull();
        done();
    });

    it('should return valid startDate', function (done) {
        const START_DATE = 'START_DATE';

        expect(startDate({
            bpi: {
                startDate: START_DATE
            }
        })).toEqual(START_DATE);

        done();
    });

});