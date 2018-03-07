const currencyInitialState = null
export default function (state = currencyInitialState, action) {
    switch (action.type) {
    case 'BPI_SET_CHART_TYPE':
        return action.payload;
    default:
        return state
    }
}