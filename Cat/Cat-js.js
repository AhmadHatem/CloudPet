var staticmove = function(){
  $('.tuna').addClass('staticmove');
};

var move = function() {
	  $('.container').addClass('move');
}

var reversemove = function() {	
	$('.container').addClass('reverse-move');
}

function pause(){
document.getElementById('pool').style.animationPlayState='paused';
document.getElementById('pool').style.webkitAnimationPlayState='paused';}

function resume(){
document.getElementById('pool').style.animationPlayState='running';
document.getElementById('pool').style.webkitAnimationPlayState='running';}


$(document).on('keydown', function(e) {
    if (e.keyCode === 37 && !$('.tuna').hasClass('staticmove') 
    	&& !$('.container').hasClass('move')) { // left arrow

    		$('.container').removeClass('reverse-move');
    		$('.tuna').removeClass('reverse');
    		$('.tuna').addClass('default');
        	move();
        	staticmove();
     
    }

    else if (e.keyCode === 39 && !$('.tuna').hasClass('staticmove') 
    	&& !$('.container').hasClass('reverse-move')) { // left arrow

	    	$('.container').removeClass('move');
    		$('.tuna').removeClass('default');
    		$('.tuna').addClass('reverse');
        	reversemove();
        	staticmove();
    }

    else if ((e.keyCode === 39 || e.keyCode === 37)
    	&& ($('.container').hasClass('move') 
    		|| $('.container').hasClass('reverse-move')) ) { 
    			
    			staticmove();
    			resume();
    }
});

$(document).on('keyup', function(e) {
    if ((e.keyCode === 37 || e.keyCode === 39) && $('.tuna').hasClass('staticmove') ) { // left arrow
       
        pause();
        $('.tuna').removeClass('staticmove');
    }

});
