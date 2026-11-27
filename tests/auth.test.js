const isPasswordValid = require('../src/auth');

test('Unit: перевірка валідності пароля', () => {
    expect(isPasswordValid('password123')).toBe(true);
    expect(isPasswordValid('short')).toBe(false);
});
