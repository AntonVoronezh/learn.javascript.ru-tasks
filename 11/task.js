const obj = {
  className: 'my menu menu',
};

const removeClass = (objArg, clsArg) => {
  const classes = objArg.className ? objArg.className.split(' ') : [];

  const iter = (argIter) => {
    const storeIter = {};
    for (let i = 0; i < classes.length; i += 1) {
      const keyIter = classes[i];
      storeIter[keyIter] = true;
    }

    for (let i = 0; i < argIter.length + 1; i += 1) {
      if (argIter[i] === clsArg) {
        argIter.splice(i, 1);
      }
    }

    if (storeIter[clsArg]) {
      return iter(argIter);
    }
    obj.className = argIter;
  };
  return iter(classes);
};

removeClass(obj, 'menu');
console.log(obj);
