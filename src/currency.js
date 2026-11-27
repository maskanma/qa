function parseCurrency(value) {
    return parseFloat(value.replace('$', ''));
}

function formatCurrency(value) {
    return `$${value.toFixed(2)}`;
}

function addCurrencies(value1, value2) {
    const sum = parseCurrency(value1) + parseCurrency(value2);
    return formatCurrency(sum);
}

module.exports = { parseCurrency, formatCurrency, addCurrencies };
