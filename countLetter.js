const emoji = require("node-emoji");
const smile = emoji.get("smile");
const cry = emoji.get("cry");

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(
      `${cry}${cry}${cry}Assertion Failed: ${actual} !== ${expected}`
    );
  } else {
    console.log(
      `${smile}${smile}${smile}Assertion Passed: ${actual} === ${expected}`
    );
  }
};

const countLetter = function(input) {
  let result = {};
  for (let letter of input) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};
const string1 = "eileen";
const result1 = countLetter(string1);
assertEqual(result1.e, 3);
assertEqual(result1.i, 1);
assertEqual(result1.l, 1);
assertEqual(result1.n, 1);
