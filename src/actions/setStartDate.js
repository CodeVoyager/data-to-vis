export default function (startDate) {
    return {
        type: 'SET_START_DATE',
        payload: startDate || null
    };
}