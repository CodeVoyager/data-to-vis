const availableCurrenciesInitialState = []
export default function (state = availableCurrenciesInitialState, action) {
    switch (action.type) {
    case 'BPI_SET_AVAILABLE_CURRENCIES':
        return action.payload;
    default:
        return state
    }
}