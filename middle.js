const middle = function (array) {
  const median = Math.round(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      return array.slice(median - 1, median + 1);
    }
    return array.slice(median - 1, median);
  }
  return [];
};
module.exports = middle;
