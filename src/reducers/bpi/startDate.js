const startDateInitialState = null;

export default function (state = startDateInitialState, action) {
    switch (action.type) {
    case 'BPI_SET_START_DATE':
        return action.payload;
    default:
        return state
    }
}