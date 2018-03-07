import highlights from './/highlights'


describe('highlights selector', function () {

    it('should exist', function (done) {
        expect(highlights).not.toBeUndefined()
        done();
    });

    it('should work on undefined state', function (done) {
        expect(highlights()).toEqual([]);
        done();
    });

    it('should return undefined on undefined state', function (done) {
        expect(highlights()).toEqual([]);
        done();
    });

    it('should return undefined on state without attribute "highlights"', function (done) {
        expect(highlights({})).toEqual([]);
        expect(highlights({bpi: {}})).toEqual([]);
        done();
    });

    it('should return valid highlights', function (done) {
        const DATA = ['a', 'b', 'c'];

        expect(highlights({
            bpi: {
                highlights: DATA
            }
        })).toEqual(DATA);

        done();
    });

});