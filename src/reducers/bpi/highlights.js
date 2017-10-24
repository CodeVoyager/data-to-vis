const dataInitialState = [];

export default function (state = dataInitialState, action) {
    switch (action.type) {
    case 'BPI_ADD_HIGHLIGHT':
        return [...state, action.payload];
    case 'BPI_REMOVE_HIGHLIGHT':
        return state.filter((x, i) => {
            return i !== action.payload;
        });
    case 'BPI_SET_HIGHLIGHT':
        return action.payload;
    default:
        return state;
    }
}