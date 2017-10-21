export default (payload) => {
    if (payload && payload instanceof Object) {
        return {
            type: 'BPI_ADD_HIGHLIGHT',
            payload: Object.assign({}, payload)
        };
    } else {
        return {
            type: 'BPI_ADD_HIGHLIGHT',
            payload: null
        };
    }
}