function solution(A, K) {
  let number;
  const lastIndex = A.length - 1;

  if (K === 0 || A.length === 0) return A;

  for (let i = 0; i < K; i++) {
    number = A[lastIndex];
    A.pop();
    A.unshift(number);
  }

  return A;
}

module.exports = solution;
