const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetter = function(input) {
  let result = {};
  for (const letter of input) {
    if (letter === " ") {
      continue;
    }
    if (!result[letter]) {
      result[letter] = 0;
    }
    result[letter]++;
  }
  return result;
};
const string1 = "eileen";
const result1 = countLetter(string1);
assertEqual(result1.e, 3);
assertEqual(result1.i, 1);
assertEqual(result1.l, 1);
assertEqual(result1.n, 1);
