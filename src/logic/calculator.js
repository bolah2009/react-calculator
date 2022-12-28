import operate from './operate';

const calculate = (total, next, operation) => {
  if (operation && total && next) {
    return {
      next: null,
      total: operate(total, next, operation),
      operation: null,
    };
  }

  return { total, next, operation };
};

const invertSign = (total, next, operation) => {
  if (next) {
    return { total, next: operate(next, '-1', 'X'), operation };
  }
  if (total) {
    return { total: operate(total, '-1', 'X'), next, operation };
  }

  return { total, next, operation };
};

const processOperation = (total, next, operation, buttonName) => {
  if (total && next && operation) {
    return {
      total: operate(total, next, buttonName),
      next: null,
      operation: buttonName,
    };
  }
  if (!next) {
    return { total, next, operation };
  }
  return { total: next, next: null, operation: buttonName };
};

const evaluateOperation = (data, buttonName) => {

  let { total = null, next = null, operation = null } = data;

  switch (buttonName) {
    case '+/-':
      ({ total, next, operation } = invertSign(total, next, operation));
      break;
    case '=':
      ({ total, next, operation } = calculate(total, next, operation));
      break;
    case '+':
    case 'X':
    case '-':
    case '%':
    case '÷':
      ({ total, next, operation } = processOperation(
        total,
        next,
        operation,
        buttonName,
      ));
      break;
    default:
      next = next ? next + buttonName : buttonName;
      break
  }

  return { operation, total, next };
}

const calculator = (data, buttonName) => {
  if (buttonName === 'AC') {
    return { total: null, next: null, operation: null };
  }

  return evaluateOperation(data, buttonName)
};

export default calculator;
