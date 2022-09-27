const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(array1, array2) {
  const inspect = require("util").inspect;
  eqArrays(array1, array2) === false
    ? console.log(`🛑🛑🛑 ${inspect(array1)}!==${inspect(array2)}`)
    : console.log(`✅✅✅ ${array1}===${array2}`);
};
const letterPositions = function(sentence) {
  const results = {};
  sentence.split("").forEach((letter, index) => {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
  });
  return results;
};

const result1 = letterPositions("hell o");

assertArraysEqual(result1.h, [0]);
assertArraysEqual(result1.e, [1]);
assertArraysEqual(result1.l, [2, 3]);
assertArraysEqual(result1.o, [5]);
