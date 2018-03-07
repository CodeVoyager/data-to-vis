import reducersWrapper from './';

describe('main reducers wrapper', () => {

    it('should exist', function (done) {
        expect(reducersWrapper).not.toBeUndefined();
        expect(reducersWrapper).toBeInstanceOf(Function);

        done();
    });
});

