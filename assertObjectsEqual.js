const emoji = require("node-emoji");
const smile = emoji.get("smile");
const cry = emoji.get("cry");
const eqArrays = function (array1, array2) {
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
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (Array.isArray(object1[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};
const assertObjectsEqual = function (object1, object2) {
  const inspect = require("util").inspect;
  eqObjects(object1, object2) === false
    ? console.log(
        `${cry}${cry}${cry}Assertion Failed: ${inspect(object1)}!==${inspect(
          object2
        )}`
      )
    : console.log(
        `${smile}${smile}${smile}Assertion Passed: ${inspect(
          object1
        )}===${inspect(object2)}`
      );
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);
const abWrong = { a: "1", b: "3" };
assertObjectsEqual(ab, abWrong);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);
