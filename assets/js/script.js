$(document).ready(function() {

	setInterval(getCurrentTime,1000);
	setInterval(getCurrentColor,1000);

});

var initializeTime = function() {
	//declare global variables (used in multiple functions)
	var date = new Date();
	hours = date.getHours();
	minutes = date.getMinutes();
	seconds = date.getSeconds();

	//adds a zero in front of h/m/s to maintain hex code when single digits
	if (hours <= 9) {
		hours = "0" + hours;
	};
	if (minutes <= 9) {
		minutes = "0" + minutes;
	};
	if (seconds <= 9) {
		seconds = "0" + seconds;
	};
};

//sets hex-color div to current time
var getCurrentTime = function() {
	initializeTime();
	//jquery
	$("#hex-clock")[0].innerText = "#" + hours + "" + minutes + "" + seconds;
	//javascript
	//document.getElementById("hex-clock").innerText = hex_color;
};

//sets body background to current hex color (current time)
var getCurrentColor = function() {
	initializeTime();
	var hex_color = "#" + hours + "" + minutes + "" + seconds;
	//selects body and changes background color with jQuery
	$("body").css('background-color', hex_color);
};


