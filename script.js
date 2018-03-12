var svg = document.getElementById('mysvg');
var clearButton = document.getElementById('clear');

var newCircle = function(x, y, r, fill){
  console.log("newCircle called");
  var circleObj = {
    element: document.createElementNS('http://www.w3.org/2000/svg', "circle"),
    x: x,
  	y: y,
  	r: r,
  	fill: fill,
    remove: function(e){
      console.log("remove called");
      svg.removeChild(this);
    },
    changeColor: function(e){
      console.log("changeColor called");
      e.stopPropagation();
      if ( e.target.getAttribute("fill") == "black" ){
        e.target.setAttribute("fill", "red");
      }
      else {
        this.remove();
        newObj = newCircle( Math.random()*500, Math.random()*500, r, fill );
        newObj.display();
      }
    },
    display: function(){
      console.log("display called");
      this.element.setAttribute("cx", x);
	    this.element.setAttribute("cy", y);
	    this.element.setAttribute("r", r);
	    this.element.setAttribute("fill", fill);
	    svg.appendChild(this.element);
      this.element.addEventListener("click", this.changeColor);
    }
  }
  return circleObj;
}


var makeCircle = function(e) {
  console.log("makeCircle called");
  newCircle( e.offsetX, e.offsetY, 10, "black").display();
}

var clear = function(e){
  console.log("clear called");
  while( svg.hasChildNodes() ){
    svg.removeChild( svg.childNodes[0] );
  }
}

svg.addEventListener("click", makeCircle)
clearButton.addEventListener("click", clear);
