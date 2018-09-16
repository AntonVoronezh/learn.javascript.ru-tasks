const makeArr = arg => arg.split('-');

const camelize = (str) => {
  const arrFromStr = makeArr(str);
  let out = '';
  for (let i = 1; i < arrFromStr.length; i += 1) {
    out += arrFromStr[i][0].toUpperCase() + arrFromStr[i].slice(1);
    console.log(`${out} - ${i}`);
  }
  return arrFromStr[0] + out;
};

