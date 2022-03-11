const { add, mul, sub, div } = require('./sum');

test('4 + 5 = 9', () => {
  expect(add(4, 5)).toBe(9);
});

test('5 * 9 = 45', () => {
  expect(mul(5, 9)).toBe(45);
});

test('10 - 5 = 5', () => {
  expect(sub(10, 5)).toBe(5);
});

test('20 / 2 = 10', () => {
  expect(div(20, 2)).toBe(10);
});