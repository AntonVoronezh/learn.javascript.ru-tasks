const arr = [5, 4, 3, 8, 0];
const arrOut = [];

const filterRange = (arg, start, end) => {
  for (let i = 0; i < arg.length; i += 1) {
    if (start <= arg[i] && arg[i] <= end) {
      arrOut.push(arg[i]);
    }
  }
  return arrOut;
};

const filtered = filterRange(arr, 3, 5);

console.log(filtered);
