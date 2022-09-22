const emoji = require("node-emoji");
const smile = emoji.get("smile");
const cry = emoji.get("cry");

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
  eqArrays(array1, array2) === false
    ? console.log(`${cry}${cry}${cry}${array1}!==${array2}`)
    : console.log(`${smile}${smile}${smile}${array1}===${array2}`);
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
