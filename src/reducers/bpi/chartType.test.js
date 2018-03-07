import chartType from './chartType';


describe('BPI chart type', () => {
    const INITIAL_STATE = 'line';

    it('should exist', () => {
        expect(chartType).toBeDefined();
    });

    it('should return initial state on unknown action', () => {
        expect(chartType(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
    });

    it('should return valid state on BPI_SET_CHART_TYPE', () => {
        const OLD_STATE = 'OLD_CHART_TYPE';
        const CHART_TYPE = 'CHART_TYPE';

        expect(chartType(OLD_STATE, {
            type: 'BPI_SET_CHART_TYPE',
            payload: CHART_TYPE
        })).not.toEqual(OLD_STATE);
        expect(chartType(OLD_STATE, {
            type: 'BPI_SET_CHART_TYPE',
            payload: CHART_TYPE
        })).toEqual(CHART_TYPE);
    });


});


