const currentHighlightInitialState = {
    date: null,
    description: null
};
export default function (state = currentHighlightInitialState, action) {
    switch (action.type) {
    case 'BPI_SET_CURRENT_HIGHLIGHT_DESCRIPTION':
        return Object.assign({}, state, {
            description: action.payload
        });
    case 'BPI_SET_CURRENT_HIGHLIGHT_DATE':
        return Object.assign({}, state, {
            date: action.payload
        });
    case 'BPI_SET_CURRENT_HIGHLIGHT_RESET':
        return {
            date: null,
            description: null
        };
    default:
        return state;
    }
}