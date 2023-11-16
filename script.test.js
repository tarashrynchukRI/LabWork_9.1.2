const calculateExcellentStudents = require("./script-test");

describe("getRandomInt", () => {
   test("unit-test", () => {
      const result = calculateExcellentStudents([{physics: 5, math: 5, informatics: 5},{physics: 5, math: 5, informatics: 5},{physics: 2, math: 5, informatics: 5}])
      expect(result).toBe(2);
   });
})