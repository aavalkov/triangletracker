var Triangle = {
	triangleCalculator: function(){
		  if ((((this.sideOne + this.sideTwo) < this.sideThree) || ((this.sideTwo + this.sideThree) < this.sideOne) || ((this.sideThree + this.sideTwo) < this.sideOne))) {
              return "NOT A TRIANGLE";
            } else if (this.sideOne === this.sideTwo && this.sideOne === this.sideThree) {
              return "EQUILATERAL";
            } else if (this.sideOne === this.sideThree || this.sideTwo === this.sideOne || this.sideThree === this.sideTwo) {
              return "ISOCELES";
            } else if ((this.sideOne !== this.sideTwo && this.sideOne !== this.sideThree) && (this.sideTwo !== this.sideThree)) {
              return "SCALENE";
            } else {
              return false;
            }
	}
};

var TrianglePerimeter = {
	trianglePerimeterCalc: function(){
		return (this.sideOne + this.sideTwo + this.sideThree )
	}
};
$(document).ready(function(){
	$("form#triangle").submit(function(event){
		event.preventDefault();
		$("h3").show();

		var sidesEntered = Object.create(Triangle);
		sidesEntered.sideOne = parseInt($('input#side1').val());
		sidesEntered.sideTwo = parseInt($('input#side2').val());
		sidesEntered.sideThree = parseInt($('input#side3').val());

		var sideLengths = Object.create(TrianglePerimeter);
	  sideLengths.sideOne = parseInt($('input#side1').val());
		sideLengths.sideTwo = parseInt($('input#side2').val());
		sideLengths.sideThree = parseInt($('input#side3').val());

		if (sidesEntered.triangleCalculator() === "NOT A TRIANGLE") {
	      alert("This is not a triangle!");
	    }  else if (sidesEntered.triangleCalculator() === "EQUILATERAL") {
	      $('#equalateral').append("<li>" + sidesEntered.sideOne + ", " + sidesEntered.sideTwo + ", " + sidesEntered.sideThree + ", P: " + sideLengths.trianglePerimeterCalc() + "</li>");
	    } else if(sidesEntered.triangleCalculator() ===  "ISOCELES") {
	      $('#isoceles').append("<li>" + sidesEntered.sideOne + ", " + sidesEntered.sideTwo + ", " + sidesEntered.sideThree + ", P: " + sideLengths.trianglePerimeterCalc() +"</li>");
	    } else if (sidesEntered.triangleCalculator() === "SCALENE") {
	     $('#scalene').append("<li>" + sidesEntered.sideOne + ", " + sidesEntered.sideTwo + ", " + sidesEntered.sideThree + ", P: " + sideLengths.trianglePerimeterCalc() +"</li>");
	    } else {
	      return false;
	    }

	    $('input#side1').val("");
	    $('input#side2').val("");
	    $('input#side3').val("");
  });
});