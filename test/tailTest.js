const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
  it("should not change the original array", () => {
    assert.deepEqual(
      ["Yo Yo", "Lighthouse", "Labs"],
      ["Yo Yo", "Lighthouse", "Labs"]
    );
  });
  it("returns [] for ['Hello']", () => {
    assert.deepEqual(tail(["Hello"]), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});
