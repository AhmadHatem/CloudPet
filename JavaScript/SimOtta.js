var direction = "left";
var eaten = false;
	$(document).ready(
		function()
		{
$("div").addClass("reverse-left");
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
$("div").removeClass("nyan");
$("div").addClass("NyanMoving");
$("div.NyanMoving").animate({marginLeft: "-=487px" ,easing: 'linear'}, 3000);	

setTimeout(function(){$("div").removeClass("NyanMoving"); },3000);
setTimeout(function(){$("div").addClass("NyanLoweringTounge"); } , 3000);

setTimeout(function()
{
	$("div").removeClass("NyanLoweringTounge"); 
	$("div").addClass("nyan");
       },6000);

}
	




       	}

  
       	);