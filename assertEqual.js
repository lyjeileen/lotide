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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("a", "a");
assertEqual(1, 3);
