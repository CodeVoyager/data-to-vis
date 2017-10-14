const dataInitialState = [];

export default function (state = dataInitialState, action) {
    switch (action.type) {
    case 'SET_DATA':
        return action.data;
    default:
        return state;
    }
}