
var coinImage = new Image();

var canvas  = document.getElementById("coinAnimation");
canvas.height = 100;
canvas.width = 1100;
coinImage.src = "images/ny (2).png";
/*function myCanvas()
{
var c = document.getElementById("coinAnimation");
var ctx = c.getContext("2d");
var img = new Image();
img.src = "C:/Users/Moaaz/Desktop/nyancat_sprite_sheet_not_completed_by_digimonfakedrawer-d4lmtq9.png";
img.onload = function()
{
	console.log("lel");
ctx.drawImage(coinImage,0,0);
}
}
myCanvas();
*/

function sprite(options)
{
	var that = {};
	that.context  = options.context;
	that.width = options.width;
	that.height = options.height;
	that.image = options.image;
    frameIndex = 0;
    tickCount = 0;
    ticksPerFrame = options.ticksPerFrame;
    numberOfFrames = options.numberOfFrames || 1;
    destinationX = 0;
    destinationY = 0;



	that.render = function () {
		that.context.clearRect(0, 0, canvas.width, canvas.height);
		that.context.drawImage (
			that.image,
		    frameIndex *150,
			0,
		   150,
			that.height,	
			0,
			0,
		    that.width / numberOfFrames,
			that.height
			);

	
	};
    	//var increase = true;


    that.update  = function()
    {
    	
    	/*if (destinationX  <= 1000 && destinationY <= 900)
    	{
    		destinationX += 10;
    	}
    	else if (destinationY <= 1000 && destinationX >= 1000)
    	{
    		destinationY += 10;
    	}
    	else if (destinationY >= 1000 && destinationX >= 1000)
    	{
    	  while (destinationX != 0 || destinationY != 0)
    	  {
    	  	console.log(destinationX);
    		destinationX -= 10;
    		destinationY -= 10;
    	}*/
    	//}
    	tickCount += 1;
    	console.log(frameIndex);
    	if (tickCount > ticksPerFrame)
    	{
    		tickCount = 0;
    		if (frameIndex < numberOfFrames - 1)
    		{

              frameIndex += 1;    		  
    	    }
    	else 
    	{
    		frameIndex = 0;
    		
    	}
    	}
    }
	 return that;
    }
	



var coin = sprite ({
	context: canvas.getContext("2d"),
		width: 900,
		height: 80,
		image: coinImage,
		numberOfFrames: 9,
		ticksPerFrame: 10
})



	function gameLoop () {
	
	  window.requestAnimationFrame(gameLoop);
	  coin.update();
	  coin.render();
	}
	coinImage.addEventListener("load", gameLoop);