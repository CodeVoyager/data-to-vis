import actionsWrapper from './index';

describe('main actions wrapper', () => {

    it('should exist', function (done) {
        expect(actionsWrapper).not.toBeUndefined();

        done();
    });

    it('should have all props', function (done) {
        expect(actionsWrapper.startLoading).toBeInstanceOf(Function);
        expect(actionsWrapper.stopLoading).toBeInstanceOf(Function);
        expect(actionsWrapper.bpi).toBeInstanceOf(Object);

        done();
    });

});

