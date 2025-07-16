const validate = require('./ex-4');

describe('validate', () => {
  test('returns error if array is empty', () => {
    const result = validate([]);
    expect(result).toEqual({ error: "Need at least one boolean" });
  });

  test('returns error if no booleans in array', () => {
    const result = validate(["true", 1, null]);
    expect(result).toEqual({ error: "Need at least one boolean" });
  });

  test('returns true if more trues than falses', () => {
    const result = validate([true, true, false]);
    expect(result).toEqual(true);
  });

  test('returns false if more falses than trues', () => {
    const result = validate([false, false, true]);
    expect(result).toEqual(false);
  });

  test('returns false if equal number of trues and falses', () => {
    const result = validate([true, false]);
    expect(result).toEqual(false);
  });

  test('ignores non-boolean values', () => {
    const result = validate([true, false, "true", 1, null]);
    expect(result).toEqual(false);
  });

  test('returns error when input is null', () => {
  expect(validate(null)).toEqual({ error: "Need at least one boolean" });
});
});
