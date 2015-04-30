var sql ;
var direction = "left";
var eaten = false;
var eatenFood = Math.floor(Math.random() * 50) + 2;
var buttonClicked = false;

 var read = new FileReader();
  //var data = read.readAsDataURL("JavaScript/development.sqlite3");
	$(document).ready(
		function(){

  
	var date = new Date();
	if(date.getHours() >= 6 && date.getHours() < 18)
	{
        $("body").css("background-image",  'url(' + "Images/RoomDay.png" +')');	
	}

	else
	{
         $("body").css("background-image",  'url(' + "Images/RoomNight.png" +')');

	}

	$("#feedButton").click(function(){
		var e = jQuery.Event("keydown");
        e.which = 70; 
        $("#feedButton").trigger(e)
	});

$("#deviceInfo").html("<h3> Press F or click on the button to feed the cat!</h3>");
$("div.nyan").addClass("reverse-left");

		}
		);

	 $(document).keydown(
       	function(e)
       	{
	  var key = e.which; 

if((key == 70 || buttonClicked ) && !eaten )
{
	eaten = true;
$("div.nyan").removeClass("nyan");
$("div").addClass("NyanMoving");
$("div.NyanMoving").animate({marginLeft: "-=487px" ,easing: 'linear'}, 3000);	

setTimeout(function(){$("div").removeClass("NyanMoving"); }, 3000);
setTimeout(function(){$("div").addClass("NyanLoweringTounge");}, 3000);

setTimeout(function()
{
	$("div").removeClass("NyanLoweringTounge"); 
	$("div").addClass("nyan");
	$("#deviceInfo").html("<h3>Your cat ate " + eatenFood + " grams !</h3>" )}, 6000);
  setTimeout(
  function()
  {  
    if(direction == "left")
{	
	$("div.nyan").removeClass("reverse-left");
	$("div.nyan").addClass("reverse-right");
	direction = "right"; 
}

 $("div").addClass("NyanMoving");
 $("div.NyanMoving").animate({marginLeft: "+=487px", easing: 'linear'}, 3000);

 setTimeout(
 	function()
 	{
 		$("div.NyanMoving").removeClass("NyanMoving"); 
 		$("div").addClass("nyan");
 		$("div.nyan").removeClass("reverse-right");
 		direction = "left";
	    $("div.nyan").addClass("reverse-left");
	    $("#deviceInfo").html("<h3> Press F or click on the button to feed the cat!</h3>");
	    eaten = false;
    }
    ,3000);
}, 6000);
}

	




       	}

  
       	);


