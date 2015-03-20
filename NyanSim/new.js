
function myCanvas()
{
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = new Image();
img.src = "C:/Users/Moaaz/Desktop/nyancat_sprite_sheet_not_completed_by_digimonfakedrawer-d4lmtq9.png";
alert("Hi trhere");
img.onload = function()
{
ctx.drawImage(img,100,100);
}
}
myCanvas();