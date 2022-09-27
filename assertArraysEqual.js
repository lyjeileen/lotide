const eqArrays = require("./eqArrays");
const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) === false
    ? console.log(`🛑🛑🛑 ${array1}!==${array2}`)
    : console.log(`✅✅✅ ${array1}===${array2}`);
};

module.exports = assertArraysEqual;
