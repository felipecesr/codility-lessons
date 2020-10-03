function solution(N) {
  let binary = N.toString(2),
    zeroCount = 0,
    result = 0;

  for (let digit of binary) {
    if (digit === "0") {
      zeroCount += 1;
    } else {
      result = Math.max(result, zeroCount);
      zeroCount = 0;
    }
  }

  return result;
}

module.exports = solution;
