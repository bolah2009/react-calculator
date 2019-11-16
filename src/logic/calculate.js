import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next } = data;

  if (buttonName === '-/+') {
    return { ...data, total: total * -1, next: next * -1 };
  }

  const calculation = operate(total, next, buttonName);
  return { ...data, total: calculation, next: calculation };
};

export default calculate;
