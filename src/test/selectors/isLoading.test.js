import isLoading from '../../selectors/isLoading'


describe('isLoading selector', function () {

    it('should work on undefined state', function (done) {
        expect(isLoading()).toBe(false);
        done();
    });

    it('should return undefined on undefined state', function (done) {
        expect(isLoading()).toBe(false);
        done();
    });

    it('should return undefined on state without attribute "isLoading"', function (done) {
        expect(isLoading({})).toBe(false);
        done();
    });

    it('should return valid isLoading', function (done) {
        expect(isLoading({
            loadingCounter: 0
        })).toEqual(false);

        expect(isLoading({
            loadingCounter: 1
        })).toEqual(true);

        expect(isLoading({
            loadingCounter: 2
        })).toEqual(true);

        expect(isLoading({
            loadingCounter: 3
        })).toEqual(true);

        done();
    });

});