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
const takeUntil = function(array, callback) {
  let result = [];
  for (const element of array) {
    console.log(callback(element));
    if (!callback(element)) {
      result.push(element);
    } else return result;
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
