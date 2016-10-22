var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


window.addEventListener("load",function(){
	$.each($('nav[data-action="expand"]*:first-child'), function(){
		$(this).on("click", function(){
			if($(this).parent().hasClass("open") == false)$(this).parent().addClass("open");
			else $(this).parent().removeClass("open");
		});
	});
});

$(document).ready(function(){
    $("h1").animate({right: '500px'});
}); 

var port = process.env.PORT || 3000;
app.listen(port);

console.log(module.exports)