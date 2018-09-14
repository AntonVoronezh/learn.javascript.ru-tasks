const arr = [1, -2, 3, 4, -9, 6, 1, -2, -3, 5, 3, 5, 7, 10, -3, 0, 2, 8, -5];

const subArrLargestSum = (arg) => {
  let sum = 0;
  let out = 0;

  for (let i = 0; i < arg.length; i += 1) {
    if (arg[i] >= 0) {
      sum += arg[i];
      out = sum > out ? sum : out;
      console.log(`${i}  ${sum} maximum ${out}`);
    } else {
      sum = 0;
    }
  }

  return out;
};
subArrLargestSum(arr);
