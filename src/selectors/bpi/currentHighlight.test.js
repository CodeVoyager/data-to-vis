import currentHighlight from './/currentHighlight'


describe('currentHighlight selector', function () {

    it('should exist', function (done) {
        expect(currentHighlight).not.toBeUndefined()
        done();
    });

    it('should work on undefined state', function (done) {
        expect(currentHighlight()).toBeNull();
        done();
    });

    it('should return undefined on undefined state', function (done) {
        expect(currentHighlight()).toBeNull();
        done();
    });

    it('should return undefined on state without attribute "currentHighlight"', function (done) {
        expect(currentHighlight({})).toBeNull();
        expect(currentHighlight({bpi: {}})).toBeNull();
        done();
    });

    it('should return valid currentHighlight', function (done) {
        const DATA = {
            date: null,
            description: null,
        };

        expect(currentHighlight({
            bpi: {
                currentHighlight: DATA
            }
        })).toEqual(DATA);

        done();
    });

});