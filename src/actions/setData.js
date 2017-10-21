export default function (data) {
    return {
        type: 'SET_DATA',
        payload: (data && data.map(x => [...x])) || [],
    };
}