describe("Triangle", function() {
  describe("triangleCalculator", function() {
    it("gets three sides and returns the type of triangle", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.triangleCalculator("1","1","1").should.equal("EQUILATERAL");
    });
  });
});

describe("TrianglePerimeter", function() {
  describe("trianglePerimeterCalc", function() {
    it("gets three sides and returns the perimeter of the triangle", function() {
      var testTrianglePerimeter = Object.create(TrianglePerimeter);
      testTrianglePerimeter.trianglePerimeterCalc("5","5","5").should.equal("15");
    });
  });
});