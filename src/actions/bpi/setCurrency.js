export default function (currency) {
    return {
        type: 'BPI_SET_CURRENCY',
        payload: currency || null
    };
}