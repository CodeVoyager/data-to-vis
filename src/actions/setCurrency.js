export default function (currency) {
    return {
        type: 'SET_CURRENCY',
        currency: currency || null
    };
}