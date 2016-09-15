$(document).ready(function() {

	getCurrentTime();
	getCurrentColor();

});

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var hex_color = "#" + hours + "" + minutes + "" + seconds;



var getCurrentTime = function() {
	//jquery
	$("#hex-clock")[0].innerText = hex_color;
	//javascript
	//document.getElementById("hex-clock").innerText = hex_colorl
};

var getCurrentColor = function() {
	$("body").css('background-color', hex_color);
}
