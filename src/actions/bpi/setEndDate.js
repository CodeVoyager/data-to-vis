export default function (endDate) {
    return {
        type: 'BPI_SET_END_DATE',
        payload: endDate || null
    };
}