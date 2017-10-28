import reducersBpiWrapper from '../../../reducers/bpi'

describe('main reducers wrapper', () => {

    it('should exist', function (done) {
        expect(reducersBpiWrapper).not.toBeUndefined();
        expect(reducersBpiWrapper).toBeInstanceOf(Function);

        done();
    });
});
