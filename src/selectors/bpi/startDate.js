export default function (state) {
    return (state && state.bpi && state.bpi.startDate) || null;
}