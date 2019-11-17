import operate from '../../src/logic/operate';

describe('it performs binary operation to data with operation parameter', () => {
  test('when operation is "+"', () => {
    expect(operate(0, 5, '+')).toBe('5');
  });

  test('when operation is "-"', () => {
    expect(operate(5, 2, '-')).toBe('3');
  });

  test('when operation is "X"', () => {
    expect(operate(5, 2, 'X')).toBe('10');
  });

  test('when operation is "÷"', () => {
    expect(operate(10, 2, '÷')).toBe('5');
  });

  test('when operation is "%"', () => {
    expect(operate(10, 2, '%')).toBe('0');
  });

  test('when operation is invalid, it returns the first operand', () => {
    expect(operate('10', '2', '=')).toBe('10');
  });

  test('when operation is a division by 0, it returns 0', () => {
    expect(operate('10', '0', '÷')).toBe('0');
  });
});
