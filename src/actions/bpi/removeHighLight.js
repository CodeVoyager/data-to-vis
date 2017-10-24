const isNil = require('ramda/src/isNil');

export default (payload) => {
    return {
        type: 'BPI_REMOVE_HIGHLIGHT',
        payload: isNil(payload) ? null : payload
    };
}