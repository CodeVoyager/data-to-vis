import isNil from 'ramda/src/isNil'

export default (payload) => {
    return {
        type: 'BPI_SET_CURRENT_HIGHLIGHT_DATE',
        payload: isNil(payload) ? null : payload
    };
}