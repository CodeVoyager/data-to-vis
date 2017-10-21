export default function (endDate) {
    return {
        type: 'SET_END_DATE',
        payload: endDate || null
    };
}