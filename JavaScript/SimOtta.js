var direction = "left";
var eaten = false;
var eatenFood = Math.floor(Math.random() * 50);
	$(document).ready(
		function()
		{
		
$("#deviceInfo").html("<h3> Press F to feed the cat!</h3>");
$("div.nyan").addClass("reverse-left");
		}
		);

	 $(document).keydown(
       	function(e)
       	{
	  var key = e.which; 

if (key == 37)
{

if(direction == "right")
{
	$("div.nyan").removeClass("reverse-right");
    $("div.nyan").addClass("reverse-left");
    direction = "left"; 
}
    $(".nyan").addClass("move");
	$(".nyan").animate({marginLeft: "-=100px"}  ,{easing:"linear"},500);
     setTimeout(function(){$(".nyan").removeClass("move");},500);
}
if (key == 39)
{ 
$(".On").css("marginLeft", "500px"); 
if(direction == "left")
{	
	$("div.nyan").removeClass("reverse-left");
	$("div.nyan").addClass("reverse-right");
	direction = "right"; 
}
 $(".nyan").addClass("move");
 $(".nyan").animate({marginLeft: "+=100px"}, 500);
 setTimeout(function(){$(".nyan").removeClass("move");},500);

}
if(key == 70 && !eaten)
{
	eaten = true;
$("div.nyan").removeClass("nyan");
$("div").addClass("NyanMoving");
$("div.NyanMoving").animate({marginLeft: "-=487px" ,easing: 'linear'}, 3000);	

setTimeout(function(){$("div").removeClass("NyanMoving"); },3000);
setTimeout(function(){$("div").addClass("NyanLoweringTounge"); } , 3000);

setTimeout(function()
{
	$("div").removeClass("NyanLoweringTounge"); 
	$("div").addClass("nyan");
	$("#deviceInfo").html("<h3>Your cat ate " + eatenFood + " grams !</h3>" )
       },6000);


}

	




       	}

  
       	);