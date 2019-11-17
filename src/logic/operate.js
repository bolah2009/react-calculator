import Big from 'big-js';

const operate = (firstOperand, secondOperand, operation) => {
  const operand = Big(firstOperand);

  switch (operation) {
    case '+':
      return operand.plus(secondOperand).toString();
    case '-':
      return operand.minus(secondOperand).toString();
    case 'X':
      return operand.times(secondOperand).toString();
    case '÷':
      if (secondOperand === '0') {
        return '0';
      }
      return operand.div(secondOperand).toString();
    case '%':
      return operand.mod(secondOperand).toString();
    default:
      break;
  }

  return firstOperand;
};

export default operate;
