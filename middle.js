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

const middle = function(array) {
  const median = Math.round(array.length / 2);
  console.log(median);
  let result = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      result = array.slice(median - 1, median + 1);
    }
    result = array.slice(median - 1, median);
  }
  return result;
};
assertArraysEqual(middle([1, 4, 5, 6, 8]), [5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
assertArraysEqual(middle([1, 8]), []);
