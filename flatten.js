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
const flatten = function(array) {
  let result = [];
  array.forEach((input) => {
    if (Array.isArray(input)) {
      input.forEach((innerInput) => {
        result.push(innerInput);
      });
    } else {
      result.push(input);
    }
  });
  return result;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
