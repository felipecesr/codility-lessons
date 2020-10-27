/**
 *
 * @param {array} A
 */
function solution(A) {
  const size = A.length;
  let sum = ((size + 1) * (size + 2)) / 2;

  for (value of A) {
    sum -= value;
  }

  return sum;
}

module.exports = solution;
