const middle = function (array) {
  const median = Math.round(array.length / 2);
  console.log(median);
  let result = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      result = array.slice(median - 1, median + 1);
    }
    result = array.slice(median - 1, median);
  }
  return result;
};
module.exports = middle;
