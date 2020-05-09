const {add,minus} = require('../math');

test('测试加法', () => {
    expect(add(3, 7)).toBe(10);
  })
  test('测试减法', () => {
    expect(minus(3, 7)).toBe(-4);
  })