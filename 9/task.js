const makeArr = arg => arg.className.split(' ');

const checkClass = (arg, cls) => {
  const arrFromCls = makeArr(arg);
  if (arrFromCls.indexOf(cls) !== 1) {
    return true;
  }
  return false;
};

const addClass = (arg, cls) => {
  if (checkClass(arg, cls)) { 
    obj.className += ` ${cls}`;
  }
  return obj;
};
