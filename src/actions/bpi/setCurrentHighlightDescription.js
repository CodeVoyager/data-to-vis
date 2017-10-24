import isNil from 'ramda/src/isNil'

export default (payload) => {
    return {
        type: 'BPI_SET_CURRENT_HIGHLIGHT_DESCRIPTION',
        payload: isNil(payload) ? null : payload
    };
}