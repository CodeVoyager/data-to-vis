const currencyInitialState = null
export default function (state = currencyInitialState, action) {
    switch (action.type) {
    case 'SET_CURRENCY':
        return action.currency;
    default:
        return state
    }
}