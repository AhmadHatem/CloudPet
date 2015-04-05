var direction = "left";
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
	$("div").removeClass("reverse-right");
    $("div").addClass("reverse-left");
    direction = "left"; 
}
    $(".nyan").addClass("move");
	$(".nyan").animate({marginLeft: "-=100px"}  ,{easing:"linear"},500);
     setTimeout(function(){$(".nyan").removeClass("move");},500);
}
if (key == 39)
{ 
$("body").css("background-image", "url('Images/RoomDeviceOn.png')"); 
if(direction == "left")
{	
	$("div").removeClass("reverse-left");
	$("div").addClass("reverse-right");
	direction = "right"; 
}
 $(".nyan").addClass("move");
 $(".nyan").animate({marginLeft: "+=100px"}, 500);
 setTimeout(function(){$(".nyan").removeClass("move");},500);

}
if(key == 70)
{
$(".nyan").addClass("move");
$(".nyan").animate({marginLeft: "-=487px" ,easing: 'linear'}, 3000);	
setTimeout(function(){$(".nyan").removeClass("move");},3000);

}




       	}

  
       	);