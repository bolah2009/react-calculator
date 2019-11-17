import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  const operations = ['+', 'X', '-', '%', '÷'];
  let newTotal = total;
  let newNext = next;
  let newOperation = operation;

  if (buttonName === 'AC') {
    newTotal = null;
    newNext = null;
    newOperation = null;
  } else if (buttonName === '+/-') {
    if (next) {
      newNext = operate(next, '-1', 'X');
    } else if (total) {
      newTotal = operate(total, '-1', 'X');
    }
  } else if (buttonName === '=') {
    if (operation && total && next) {
      newNext = null;
      newTotal = operate(total, next, operation);
      newOperation = null;
    }
  } else if (operations.includes(buttonName)) {
    newNext = null;
    newOperation = buttonName;
    if (total && next && operation) {
      newTotal = operate(total, next, operation);
    } else if (next) {
      newTotal = next;
    }
  } else if (next) {
    newNext = next + buttonName;
  } else {
    newNext = buttonName;
  }
  return { operation: newOperation, total: newTotal, next: newNext };
};

export default calculate;
