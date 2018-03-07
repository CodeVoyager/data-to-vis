import { bpi } from './';


describe('Api index', () => {

    it('should have bpi attribute', () => {
        expect(bpi).toBeDefined();
        expect(bpi).toBeInstanceOf(Object);
    });

});
