export default function (currency) {
    return {
        type: 'BPI_SET_CHART_TYPE',
        payload: currency || null
    };
}