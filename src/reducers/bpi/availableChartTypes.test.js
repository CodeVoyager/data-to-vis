import availableChartTypes from './availableChartTypes';

describe('BPI availableChartTypes reducer', () => {
    const INITIAL_STATE = ['line', 'bar']

    it('should exist', () => {
        expect(availableChartTypes).toBeDefined();
    });


    it('should return initial state on empty action', () => {
        expect(availableChartTypes()).toEqual(INITIAL_STATE);
    });

    it('should return initial state on uknown action', () => {
        expect(availableChartTypes(INITIAL_STATE, {
            type: 'RANDOM'
        })).toEqual(INITIAL_STATE);

        expect(availableChartTypes({})).toEqual(INITIAL_STATE);
    });
});
