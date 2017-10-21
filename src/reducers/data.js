const dataInitialState = [];

export default function (state = dataInitialState, action) {
    switch (action.type) {
    case 'SET_DATA':
        return action.payload;
    default:
        return state;
    }
}