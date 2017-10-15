export default function (availableCurrencies) {
    return {
        type: 'SET_AVAILABLE_CURRENCIES',
        currencies: (availableCurrencies && [...availableCurrencies]) || [],
    };
}