const assert = require("chai").assert;
const middle = require("../middle");
// assertArraysEqual(middle([1, 4, 5, 6, 8]), [5]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
// assertArraysEqual(middle([1, 8]), []);

describe("#middle", () => {
  it("should return [5] for middle([1, 4, 5, 6, 8]", () => {
    assert.deepEqual(middle([1, 4, 5, 6, 8]), [5]);
  });
  it("should return [] for middle([1, 8]", () => {
    assert.deepEqual(middle([1, 8]), []);
  });
  it("should return [4, 5] for middle([1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });
});
