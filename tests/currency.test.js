const { formatCurrency, addCurrencies } = require('../src/currency');

test('Unit: форматування числа у валюту', () => {
    expect(formatCurrency(50)).toBe('$50.00');
    expect(formatCurrency(30.25)).toBe('$30.25');
});

test('Integration: складання двох значень валюти', () => {
    expect(addCurrencies('$50', '$30')).toBe('$80.00');
    expect(addCurrencies('$20.75', '$9.25')).toBe('$30.00');
});
