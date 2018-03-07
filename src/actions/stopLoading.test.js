import stopLoadingAction from './stopLoading';

describe('stopLoadingAction', function () {
    const ACTION_NAME = 'STOP_LOADING';

    it('should exist', function (done) {
        expect(stopLoadingAction).not.toBeUndefined();

        done();
    });


    it('should return object', function (done) {
        expect(stopLoadingAction()).toBeInstanceOf(Object);

        done();
    });


    it('should ignore additional arguments', function (done) {
        expect(stopLoadingAction('Extra 1', 'Extra 2', 'Extra 3'))
        .toEqual({
            type: ACTION_NAME
        });

        done();
    });

    it('should return valid action', function (done) {
        expect(stopLoadingAction())
        .toEqual({
            type: ACTION_NAME
        });

        done();
    });


});
