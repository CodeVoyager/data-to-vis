export default function (state) {
    return state ? (state.loadingCounter > 0 ? true : false) : false;
}