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
    ? console.log(`🛑🛑🛑 ${array1}!==${array2}`)
    : console.log(`✅✅✅ ${array1}===${array2}`);
};

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
const numbers = [1, 2, 3, 4];
const results2 = map(numbers, (number) => number + 1);
const num = [1, 4, 9];
const results3 = map(num, (num) => Math.sqrt(num));

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [2, 3, 4, 5]);
assertArraysEqual(results3, [1, 2, 3]);
