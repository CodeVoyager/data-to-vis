export default function (startDate) {
    return {
        type: 'SET_START_DATE',
        startDate: startDate || null
    };
}