import startLoadingAction from '../../actions/startLoading';

describe('startLoadingAction', function () {
    const ACTION_NAME = 'START_LOADING';

    it('should exist', function (done) {
        expect(startLoadingAction).not.toBeUndefined();

        done();
    });


    it('should return object', function (done) {
        expect(startLoadingAction()).toBeInstanceOf(Object);

        done();
    });


    it('should ignore additional arguments', function (done) {
        expect(startLoadingAction('Extra 1', 'Extra 2', 'Extra 3'))
        .toEqual({
            type: ACTION_NAME
        });

        done();
    });

    it('should return valid action', function (done) {
        expect(startLoadingAction())
        .toEqual({
            type: ACTION_NAME
        });

        done();
    });


});
