const isNil = require('ramda/src/isNil');

export default (payload) => {
    return {
        type: 'BPI_SET_HIGHLIGHT',
        payload: isNil(payload) ? null : payload.map(x => Object.assign({}, x))
    };
}