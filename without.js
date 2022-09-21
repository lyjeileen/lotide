const emoji = require("node-emoji");
const smile = emoji.get("smile");
const cry = emoji.get("cry");

const isArraysEqual = function(array1, array2) {
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

const without = function(array, remove) {
  let result = [];
  if (array) {
    array.forEach((input) => {
      if (!remove.includes(input)) {
        result.push(input);
      }
    });
    return result;
  }
};
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
isArraysEqual(words, ["hello", "world", "lighthouse"]);
