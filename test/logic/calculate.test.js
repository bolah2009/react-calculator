import calculate from '../../src/logic/calculate';

describe('it performs binary operation to data with buttonName parameter', () => {
  const data = { total: 0, next: 5, operation: '' };
  test('when buttonName is "+"', () => {
    const buttonName = '+';
    const calculation = calculate(data, buttonName);
    expect(calculation).toHaveProperty('total', '5');
    expect(calculation).toHaveProperty('next', '5');
  });

  test('when buttonName is "-/+"', () => {
    const buttonName = '-/+';
    const calculation = calculate({ ...data, ...{ total: 10 } }, buttonName);
    expect(calculation).toHaveProperty('total', -10);
    expect(calculation).toHaveProperty('next', -5);
  });
});
