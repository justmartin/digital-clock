$(document).ready(function() {

		getCurrentTime();
		getCurrentColor();

});


//declare global variables (used in multiple functions)
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var hex_color = "#" + hours + "" + minutes + "" + seconds;

//adds a zero in front of h/m/s to maintain hex code when single digits
if (hours <= 9) {
	hours = "0" + hours;
}
if (minutes <= 9) {
	minutes = "0" + minutes;
}
if (seconds <= 9) {
	seconds = "0" + seconds;
}

//sets hex-color div to current time
var getCurrentTime = function() {
	//jquery
	$("#hex-clock")[0].innerText = hex_color;
	//javascript
	//document.getElementById("hex-clock").innerText = hex_colorl
};

//sets body background to current hex color (current time)
var getCurrentColor = function() {
	//selects body and changes background color with jQuery
	$("body").css('background-color', hex_color);
}


