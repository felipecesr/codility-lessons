const solution = require("../src/binary_gap");

test("should return the correct values", () => {
  expect(solution(9)).toBe(2);
  expect(solution(529)).toBe(4);
  expect(solution(20)).toBe(1);
});
