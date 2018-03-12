var svg = document.getElementById('mysvg');
var clear = document.getElementById('clear');

var newCircle = function(x, y, r, fill){
  var circleObj = {
    element: document.createElementNS('http://www.w3.org/2000/svg', "circle"),
    x: x,
  	y: y,
  	r: r,
  	fill: fill,
	  display: function(){
      this.element.setAttribute("cx", x);
	    this.element.setAttribute("cy", y);
	    this.element.setAttribute("r", r);
	    this.element.setAttribute("fill", fill);
	    svg.appendChild(this.element);
      this.element.addEventListener("click", remove);
    },
	  remove: function(e){
      if( e.target.getAttribute("fill") == "black" ) {
        e.stopPropagation();
		    e.target.setAttribute("fill", "red");
      } else {
        e.stopPropagation();
		    svg.removeChild(e.target);
        // newCircle( Math.random()*500, Math.random()*500, 10, "black");
      }
    }
  }
  return circleObj;
}


var makeCircle = function(e) {
  newCircle( e.offsetX, e.offsetY, 10, "black").display();
}

var clear = function(e){
  while( svg.hasChildNodes() ){
    slate.removeChild( slate.childNodes[0] );
  }
}

svg.addEventListener("click", makeCircle)
clear.addEventListener("click", clear);
