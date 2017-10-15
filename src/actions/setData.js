export default function (data) {
    return {
        type: 'SET_DATA',
        data: (data && data.map(x => [...x])) || [],
    };
}