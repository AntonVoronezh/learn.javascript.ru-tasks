// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Input: J = "z", S = "ZZ"
// Output: 0
const ff = 'aAAbbbb';

const numJewelsInStones = (J, S) => {
  // var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
  const target = J; // цель поиска

  let pos = 0;
  let out = 0;
  while (true) {
    const foundPos = S.indexOf(target, pos);
    if (foundPos === -1) break;
    pos = foundPos + 1;
    out = foundPos;
  }
  return out;
};
console.log(numJewelsInStones('A', ff));
