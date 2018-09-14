const arr = [];

for (let i = 2; i < 101; i += 1) {
  arr.push(i);
}

const findIntegers = () => {
  const iter = (arrInIter, arrOutIter, count) => {
    for (let i = 0; i < arrInIter.length - 1; i += 1) {
      if (arrInIter[i] % count !== 0) {
        arrOutIter.push(arrInIter[i]);
      }
    }
    console.log(`${count} count - ${arrOutIter}`);
    if (arrInIter[0] * arrInIter[0] > 100) {
      return arrInIter;
    }
    return iter(arrOutIter, [], count + 1);
  };
  return iter(arr, [], 2);
};
