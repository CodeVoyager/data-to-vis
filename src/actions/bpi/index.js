import setAvailableCurrencies from './setAvailableCurrencies';
import setCurrency from './setCurrency';
import setData from './setData';
import setEndDate from './setEndDate';
import setStartDate from './setStartDate';
import addHighLight from './addHighLight';
import removeHighLight from './removeHighLight';
import setHighLights from './setHighLights';
import setCurrentHighlightDate from './setCurrentHighlightDate';
import setCurrentHighlightDescription from './setCurrentHighlightDescription';
import resetCurrentHighlight from './resetCurrentHighlight';

const actions = {
    setAvailableCurrencies,
    setCurrency,
    setData,
    setEndDate,
    setStartDate,
    addHighLight,
    removeHighLight,
    setHighLights,
    setCurrentHighlightDate,
    setCurrentHighlightDescription,
    resetCurrentHighlight,
};

export default actions;

export {
    setAvailableCurrencies,
    setCurrency,
    setData,
    setEndDate,
    setStartDate,
    addHighLight,
    removeHighLight,
    setHighLights,
    setCurrentHighlightDate,
    setCurrentHighlightDescription,
    resetCurrentHighlight,
}