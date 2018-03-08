var ns = 'http://www.w3.org/2000/svg';
var cvs = document.getElementById('svg');
var clear = document.getElementById('clear');

function circle( xCoor, yCoor ) {
    this.x = xCoor;
    this.y = yCoor;
}

var circle {
    x:"0"
    y:"0"
    r:"33"
    color:"coral"
    display: function(e) {
	this.setAttribute( 'cx', e.offsetX );
	this.setAttribute( 'cy', e.offsetY );
	this.setAttribute( 'r', 33 );
	this.setAttribute( 'fill', 'coral' );
	cvs.appendChild(this);
	this.addEventListener( 'click', change );
    }
    remove: function() {
	cvs.removeChild(this);
    }
}

var makeCirc = function(e) {
    var circ = new circle( e.offsetX, e.offsetY );
}
    
cvs.addEventListener( 'click', makeCirc );
