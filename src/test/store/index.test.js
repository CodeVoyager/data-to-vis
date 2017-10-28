import store from '../../store';


describe('Redux store', () => {

    it('should exist', () => {
        expect(store).not.toBeUndefined();
        expect(store).toBeInstanceOf(Object);
    });

});
