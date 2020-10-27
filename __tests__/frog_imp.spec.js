const solution = require("../src/frog_imp");

test("should return the minimal number of jumps", () => {
  expect(solution(10, 85, 30)).toBe(3);
});
