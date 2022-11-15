const map: Record<string, number> = {
  'I': 1,
  'V': 5,
  'X': 10,
  'IV': 4,
  'IX': 9,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
  'XL': 40,
  'XC': 90,
  'CD': 400,
  'CM': 900

};
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s: string) {

  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    let val;
    if (i < s.length - 1) {
      val = map[`${s[i]}${s[i + 1]}`];
    }
    if (val) {
      i++;
    } else {
      val = map[s[i]];
    }
    counter = counter + val;
  }
  return counter;

};


const s0 = 'III';
const s1 = 'LVIII';
const s2 = 'MCMXCIV';
console.log(s0, romanToInt(s0));
console.log(s1, romanToInt(s1));
console.log(s2, romanToInt(s2));
