import operate from '../../src/logic/operate';

describe('it performs binary operation to data with operation parameter', () => {
  test('when opeartion is "+"', () => {
    expect(operate(0, 5, '+')).toBe('5');
  });

  test('when opeartion is "-"', () => {
    expect(operate(5, 2, '-')).toBe('3');
  });

  test('when opeartion is "X"', () => {
    expect(operate(5, 2, 'X')).toBe('10');
  });

  test('when opeartion is "÷"', () => {
    expect(operate(10, 2, '÷')).toBe('5');
  });

  test('when opeartion is "%"', () => {
    expect(operate(10, 2, '%')).toBe('0');
  });

  test('when opeartion is invalid, it returns the first operand', () => {
    expect(operate('10', '2', '=')).toBe('10');
  });
});
