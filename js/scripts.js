$(document).ready(function(){
  $("form#triangle").submit(function(event){
 
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

  	var sidesEntered = Object.create(Triangle);
  	sidesEntered.sideOne = parseInt($('input#side1').val());
  	sidesEntered.sideTwo = parseInt($('input#side2').val());
  	sidesEntered.sideThree = parseInt($('input#side3').val());

  	if (sidesEntered.triangleCalculator() === "NOT A TRIANGLE") {
        alert("This is not a triangle!");
      }  else if (sidesEntered.triangleCalculator() === "EQUILATERAL") {
        $('#equalateral').append("<li>" + sidesEntered.sideOne + ", " + sidesEntered.sideTwo + ", " + sidesEntered.sideThree + "</li>");
      } else if(sidesEntered.triangleCalculator() ===  "ISOCELES") {
        $('#isoceles').append("<li>" + sidesEntered.sideOne + ", " + sidesEntered.sideTwo + ", " + sidesEntered.sideThree + "</li>");
      } else if (sidesEntered.triangleCalculator() === "SCALENE") {
       $('#scalene').append("<li>" + sidesEntered.sideOne + ", " + sidesEntered.sideTwo + ", " + sidesEntered.sideThree + "</li>");
      } else {
        return false;
      }


 	event.preventDefault();
  });

 });