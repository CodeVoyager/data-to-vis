import {
    availableCurrencies,
    currency,
    data,
    startDate,
    endDate,
    highlights,
    currentHighlight,
    availableChartTypes,
    chartType,
} from '../../../../selectors/bpi';
import {
    isLoading,
} from '../../../../selectors';

const mapStateToProps = state => {
    return {
        availableCurrencies: availableCurrencies(state),
        currency: currency(state),
        data: data(state),
        startDate: startDate(state),
        endDate: endDate(state),
        isLoading: isLoading(state),
        highlights: highlights(state),
        currentHighlight: currentHighlight(state),
        availableChartTypes: availableChartTypes(state),
        chartType: chartType(state),
    };
}

export default mapStateToProps;