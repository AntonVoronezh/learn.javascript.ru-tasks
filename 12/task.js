const arr = [5, 3, 8, 1];

const filterRangeInPlace = (arg, num1, num2) => {
  const arrOut = [];
  for (let i = 0; i < arg.length; i += 1) {
    if (arg[i] >= num1 && arg[i] <= num2) {
      arrOut.push(arg[i]);
    }
  }
  return arrOut;
};

console.log(filterRangeInPlace(arr, 1, 4));
