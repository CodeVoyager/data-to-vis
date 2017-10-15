export default function (endDate) {
    return {
        type: 'SET_END_DATE',
        endDate: endDate || null
    };
}