const solution = require("../src/perm_missing_elem");

test("should return the value of the missing element", () => {
  expect(solution([2, 3, 1, 5])).toBe(4);
  expect(solution([1, 3, 5, 6, 4])).toBe(2);
});
