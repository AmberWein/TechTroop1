const { isEven, removeAtLeastOne, simplify} = require('./ex-1-3');

describe('isEven', () => {
  it('return true for even numbers', () => {
    expect(isEven(2)).toEqual(true);
    expect(isEven(0)).toEqual(true);
    expect(isEven(-2)).toEqual(true);
  });

    it('return false for odd numbers', () => {
    expect(isEven(1)).toEqual(false);
    expect(isEven(-3)).toEqual(false);
  });

  it('handles non-integer values', () => {
    expect(isEven(2.5)).toEqual(false);
  });

});

describe('removeAtLeastOne', () => {
test('removes at least one element from the array', () => {
    const input = [1, 2, 3, 4, 5];
    const originalLength = input.length;

    const result = removeAtLeastOne([...input]);

    expect(result.length < originalLength).toEqual(true);
    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toBeGreaterThanOrEqual(1);
  });

});

describe('simplify', () => {
  test('removes specified symbols from the string', () => {
    const input = "Hello, world!";
    const expected = "Hello world";
    expect(simplify(input)).toEqual(expected);
  });

  test('removes multiple symbols in the string', () => {
    const input = "Wow! That’s amazing, isn’t it?";
    const expected = "Wow That’s amazing isn’t it?";
    expect(simplify(input)).toEqual(expected);
  });

  test('returns the same string if there are no symbols', () => {
    const input = "Just a regular sentence";
    expect(simplify(input)).toEqual(input);
  });

  test('returns empty string if input is only symbols', () => {
    const input = "!#.,'";
    expect(simplify(input)).toEqual("");
  });

  test('works with an empty string', () => {
    const input = "";
    expect(simplify(input)).toEqual("");
  });

  test('always returns a string', () => {
  const inputs = [
    "Hello, world!",
    "No symbols here",
    "!#.,'",
    "",
    "12345"
  ];

  inputs.forEach(input => {
    const result = simplify(input);
    expect(typeof result).toEqual("string");
  });
});
});
