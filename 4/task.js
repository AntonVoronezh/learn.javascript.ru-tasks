const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

const numbers = [];

const result = prompt('Введите число', 'number ?');

const sum = (arg) => {
  let out = 0;
  for (let i = 0; i < arg.length; i += 1) {
    out += arg[i];
  }
  return out;
};

const addInArr = (arg) => {
  if (isNumeric(arg)) {
    numbers.push(arg);
  }
  return sum(arg);
};
