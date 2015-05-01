var sql ;
var direction = "left";
var eaten = false;
var eatenFood = Math.floor(Math.random() * 50) + 2;
var buttonClicked = false;
var read = new FileReader();
var seconds;
var minute; 
var hours; 
var day;
var month;
var newDate =  new Date();
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var actualSec;
var actualMin;
var actualHour;

$(document).ready(function(){

	var date = new Date();
	if(date.getHours() >= 6 && date.getHours() < 18)
	{
        $("body.nyan").css("background-image",  'url(' + "Images/RoomDay.png" +')');	
	}

	else
	{
         $("body.nyan").css("background-image",  'url(' + "Images/RoomNight.png" +')');

	}

	$("#feedButton").click(function(){
		var e = jQuery.Event("keydown");
        e.which = 70; 
        $("#feedButton").trigger(e)
	});

$("#deviceInfo").html("<h3> Press F or click on the button to feed the cat!</h3>");
$("div.sa3d").addClass("nyan");
$("div.nyan").addClass("reverse-left");

newDate.setDate(newDate.getDate());
console.log("fdfsd " + newDate);

day  = newDate.getDate();
month = newDate.getMonth();
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

 actualSec = setInterval( function() {
   seconds = new Date().getSeconds();
  $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
  },1000);
  
actualMin = setInterval( function() {
   minutes = new Date().getMinutes();
  $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
  
actualHour = setInterval( function() {
   hours = new Date().getHours();

  $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000); 



});

dayr = newDate.getDate();
console.log(dayr);
$(document).keydown(function(e){
var key = e.which;  
if((key == 70 || buttonClicked ) && !eaten )
{
eaten = true;
$("div.nyan").removeClass("nyan");
$("div.sa3d").addClass("NyanMoving");
$("div.NyanMoving").animate({marginLeft: "-=487px" ,easing: 'linear'}, 3000);	

setTimeout(function(){$("div.sa3d").removeClass("NyanMoving"); }, 3000);
setTimeout(function(){$("div.sa3d").addClass("NyanLoweringTounge");}, 3000);

setTimeout(function()
{
	$("div.sa3d").removeClass("NyanLoweringTounge"); 
	$("div.sa3d").addClass("nyan");
	$("#deviceInfo").html("<h3>Your cat ate " + eatenFood + " grams !</h3>" )}, 6000);
setTimeout(function(){  
    if(direction == "left")
{	
	$("div.nyan").removeClass("reverse-left");
	$("div.nyan").addClass("reverse-right");
	direction = "right"; 
}

 $("div.sa3d").addClass("NyanMoving");
 $("div.NyanMoving").animate({marginLeft: "+=487px", easing: 'linear'}, 3000);

 setTimeout(
 	function()
 	{
 		$("div.NyanMoving").removeClass("NyanMoving"); 
 		$("div.sa3d").addClass("nyan");
 		$("div.nyan").removeClass("reverse-right");
 		direction = "left";
	    $("div.nyan").addClass("reverse-left");
	    $("#deviceInfo").html("<h3> Press F or click on the button to feed the cat!</h3>");
	    eaten = false;
    }
    ,3000);
}, 6000);
}
});




function Run()
{
clearInterval(actualSec);
clearInterval(actualMin);
clearInterval(actualHour);
day = newDate.getDate();
var weekDay = newDate.getDay();
var simulate = setInterval( function() {
seconds += 60;
  $("#sec").html(seconds);
  $("#min").html(minutes);
  $("#hours").html(hours);
 if (seconds >= 60)
{
  minutes++;
}
if (minutes == 60)
{
  hours++;
}
if (hours == 24)
{
day++;
weekDay++;	
}
if (month == 2)
{
  if (day == 28)
{
month++;
}
else if (month == 1 || month == 3 || month == 5 || month  == 7 || month == 8 || month == 10 || month == 12)
{
  if (day == 31)
  {
    month++;
  }
}
else
{
  if (day == 30)
    month++;
}
}

if (month == 12)
{
year++;
}
minutes = minutes < 60 ? minutes : 0;
seconds = seconds < 60 ? seconds : 0;
hours = hours < 24 ? hours : 0;
$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
weekDay = weekDay ==  7 ? 0: weekDay;

 $('#Date').html(dayNames[weekDay] + " " + day + " " + monthNames[month] + ' ' + newDate.getFullYear());
/*console.log("starDay " + startDay); 
console.log("today " + day); 
console.log("startMonth " + startMonth);
console.log("Month is " + month);
console.log( " " + timeHour + " " + timeMin);*/
if (startDay <= day  && startMonth <= (month + 1) && hours == timeHour && minutes == timeMin)
{
	$(".log").append("\n The cat should eat now @: \n" + newDate.getFullYear() + "-" + (month+1) + "-" + day  + " " + hours + " : " + minutes + "0");

	var e = jQuery.Event("keydown");
     e.which = 70; 
     $("#feedButton").trigger(e)
}

 if (month == endMonth && day == endDay)
{
clearInterval(simulate);
}
todayDate = newDate.getFullYear() + "-" + (month+1) + "-" + day; 
var ate = db.exec("SELECT ate FROM foods WHERE date = ' " + todayDate + "'" );
if (ate != null)
{
 eatenFood = ate;

}
else
{
	 eatenFood = Math.floor(Math.random() * 50) + 2;

}

  },0.00005);
console.log(DBleftovers);
console.log(DBate);
}
  
