export default function (availableCurrencies) {
    return {
        type: 'BPI_SET_AVAILABLE_CURRENCIES',
        payload: (availableCurrencies && [...availableCurrencies]) || [],
    };
}