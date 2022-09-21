const emoji = require("node-emoji");
const smile = emoji.get("smile");
const cry = emoji.get("cry");

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`${cry}${cry}${cry}${array1}!==${array2}`);
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`${cry}${cry}${cry}${array1}!==${array2}`);
        return;
      }
    }
    console.log(`${smile}${smile}${smile}${array1}===${array2}`);
  }
};
eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);
eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);
