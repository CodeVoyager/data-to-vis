const availableCurrenciesInitialState = []
export default function (state = availableCurrenciesInitialState, action) {
    switch (action.type) {
    case 'SET_AVAILABLE_CURRENCIES':
        return action.currencies;
    default:
        return state
    }
}