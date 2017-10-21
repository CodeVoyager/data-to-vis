export default function (data) {
    return {
        type: 'BPI_SET_DATA',
        payload: (data && data.map(x => [...x])) || [],
    };
}