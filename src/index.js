
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

  if (matrix === undefined) {
    return result;
  }
  for (let i = 0; i < matrix.length; i++) {
    if (Array.isArray(matrix[i])) {
      if (i % 2 !== 0) {
        result = result.concat(towelSort(matrix[i].reverse()));
      } else {
        result = result.concat(towelSort(matrix[i]));
      }
    } else {
      result.push(matrix[i]);
    }
  }
  return result;
}
