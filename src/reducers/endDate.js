const endDateInitialState = null;
export default function (state = endDateInitialState, action) {
    switch (action.type) {
    case 'SET_END_DATE':
        return action.endDate;
    default:
        return state
    }
}