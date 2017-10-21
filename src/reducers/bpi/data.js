const dataInitialState = [];

export default function (state = dataInitialState, action) {
    switch (action.type) {
    case 'BPI_SET_DATA':
        return action.payload;
    default:
        return state;
    }
}