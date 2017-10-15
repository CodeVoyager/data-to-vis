const loadingCounterInitialState = 0
export default function (state = loadingCounterInitialState, action) {
    switch (action.type) {
    case 'START_LOADING':
        return state + 1;
    case 'STOP_LOADING':
        let newState = state - 1;
        return Math.max(0, newState);
    default:
        return state;
    }
}