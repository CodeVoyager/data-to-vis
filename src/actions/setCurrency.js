export default function (currency) {
    return {
        type: 'SET_CURRENCY',
        payload: currency || null
    };
}