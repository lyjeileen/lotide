const emoji = require("node-emoji");
const smile = emoji.get("smile");
const cry = emoji.get("cry");

const assertEqual = function (actual, expected) {
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

const findKeyByValue = function (object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  romance: "The Expanse",
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Exanse"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
