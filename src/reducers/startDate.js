const startDateInitialState = null;

export default function (state = startDateInitialState, action) {
    switch (action.type) {
    case 'SET_START_DATE':
        return action.payload;
    default:
        return state
    }
}