var direction = "right";
	$(document).ready(
		function()
		{

		}
		);

	 $(document).keydown(
       	function(e)
       	{
	  var key = e.which; 
	console.log(direction);

if (key == 37)
{

if(direction == "right")
{
	$("div").addClass("reverse-left");
    direction = "left"; 
}
    $(".nyan").addClass("move");
	$(".nyan").animate({marginLeft: "-=50px"});
     setTimeout(function(){$(".nyan").removeClass("move");},400);


}
else if (key == 39)
{


   

if(direction == "left")
{
	$("div").addClass("reverse-right");
	direction = "right"; 
}
 $(".nyan").addClass("move");
 		$(".nyan").animate({marginLeft: "+=50px"});
        setTimeout(function(){$(".nyan").removeClass("move");},400);

}



       	}
       	);