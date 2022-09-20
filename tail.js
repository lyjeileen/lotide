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

const tail = function(array) {
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words)[1], "Labs");
