export default function (startDate) {
    return {
        type: 'BPI_SET_START_DATE',
        payload: startDate || null
    };
}