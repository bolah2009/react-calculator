import calculate from '../../src/logic/calculate';

let data;
beforeEach(() => {
  data = { total: null, next: null, operation: null };
});

describe('when `buttonName` is "AC"', () => {
  it('all properties are set to `null`', () => {
    const buttonName = 'AC';
    data = { total: '10', next: '20', operation: '+' };
    const calculation = calculate(data, buttonName);
    expect(calculation).toHaveProperty('total', null);
    expect(calculation).toHaveProperty('next', null);
    expect(calculation).toHaveProperty('operation', null);
  });
});

describe('when `buttonName` is "+/-"', () => {
  const buttonName = '+/-';

  it('returns an object with `next` property set to the alternate sign of `data.next` if `data.next` and `data.total` is defined', () => {
    data = { total: '10', next: '20', operation: '+' };
    const calculation = calculate(data, buttonName);
    expect(calculation).toHaveProperty('total', data.total);
    expect(calculation).toHaveProperty('next', '-20');
    expect(calculation).toHaveProperty('operation', data.operation);
  });

  it('returns an object with `next` property set to "data.next" if `data.next` and `data.total` is not defined', () => {
    const calculation = calculate(data, buttonName);
    expect(calculation).toHaveProperty('total', data.total);
    expect(calculation).toHaveProperty('next', data.next);
    expect(calculation).toHaveProperty('operation', data.operation);
  });

  it('returns an object with `total` property set to the alternate sign of `data.total` if only `data.next` is not defined', () => {
    data = { total: '10', next: null, operation: '+' };
    const calculation = calculate(data, buttonName);
    expect(calculation).toHaveProperty('total', '-10');
    expect(calculation).toHaveProperty('next', data.next);
    expect(calculation).toHaveProperty('operation', data.operation);
  });
});

describe('when `buttonName` is "="', () => {
  const buttonName = '=';

  it('returns an object with `total` property set to the binary operation of `data.next` and `data.total` if all property of data is defined', () => {
    data = { total: '10', next: '20', operation: '+' };
    const calculation = calculate(data, buttonName);
    expect(calculation).toHaveProperty('total', '30');
    expect(calculation).toHaveProperty('next', null);
    expect(calculation).toHaveProperty('operation', null);
  });

  it('returns an object with same values as `data` if any of the data property is not defined', () => {
    const calculation = calculate(data, buttonName);
    expect(calculation).toHaveProperty('total', data.total);
    expect(calculation).toHaveProperty('next', data.next);
    expect(calculation).toHaveProperty('operation', data.operation);
  });
});

describe('when `buttonName` is a valid binary operator', () => {
  const buttonName = '+';

  it('returns an object with `total` property set to the binary operation of `data.next` and `data.total` if all property of data is defined', () => {
    data = { total: '10', next: '20', operation: '+' };
    const calculation = calculate(data, buttonName);
    expect(calculation).toHaveProperty('total', '30');
    expect(calculation).toHaveProperty('next', null);
    expect(calculation).toHaveProperty('operation', buttonName);
  });

  it('returns an object with same values as `data` if `data.next` is not defined', () => {
    data = { total: '10', next: null, operation: '+' };
    const calculation = calculate(data, buttonName);
    expect(calculation).toHaveProperty('total', data.total);
    expect(calculation).toHaveProperty('next', null);
    expect(calculation).toHaveProperty('operation', buttonName);
  });

  it('returns an object with `total` property set to `data.next` if `data.total` is not defined', () => {
    data = { total: null, next: '40', operation: null };
    const calculation = calculate(data, buttonName);
    expect(calculation).toHaveProperty('total', data.next);
    expect(calculation).toHaveProperty('next', null);
    expect(calculation).toHaveProperty('operation', buttonName);
  });
});

describe('when `buttonName` is a number', () => {
  const buttonName = '5';

  it('returns an object with `next` property concatenate with the buttonName value if `data.next` is defined', () => {
    data = { total: '10', next: '2', operation: '+' };
    const calculation = calculate(data, buttonName);
    expect(calculation).toHaveProperty('total', data.total);
    expect(calculation).toHaveProperty('next', '25');
    expect(calculation).toHaveProperty('operation', data.operation);
  });

  it('returns an object with `next` property set to the buttonName value if `data.next` is not defined', () => {
    data = { total: '10', next: null, operation: '+' };
    const calculation = calculate(data, buttonName);
    expect(calculation).toHaveProperty('total', data.total);
    expect(calculation).toHaveProperty('next', '5');
    expect(calculation).toHaveProperty('operation', data.operation);
  });
});
