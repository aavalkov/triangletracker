$(document).ready(function(){
  $("form#triangle").submit(function(event){
  	var side1 = parseInt($('input#side1').val());
  	var side2 = parseInt($('input#side2').val());
  	var side3 = parseInt($('input#side3').val());

  	var Triangle = {
  		triangleCalculator:function(){
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
  	}

 	event.preventDefault();
  });

 });