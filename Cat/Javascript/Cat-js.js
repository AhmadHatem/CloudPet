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
            $('.box').addClass('open-box');
            setTimeout( function(){
                $('.tuna').removeClass('staticmove');
                $('.tuna').addClass('eat');
                var $div = $("<div>", {class: "food"});
                $("body").append($div);
                            } , 4000);
        	move();
        	staticmove();
            setTimeout( function(){
                $('.tuna').removeClass('eat');
                $('.tuna').addClass('eaten');
                            } , 6000);
            setTimeout( function(){
                var x = Math.floor(Math.random() * 20);
                alert("Your cat ate " + x + " gms.");
                            } , 8000);

     
    }
/*
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
    }*/
});

/*$('.container').on('change', function() {
    
        if($('.container').position().right == 500){
        $('.tuna').removeClass('staticmove');
    
}
});
   /* if ((e.keyCode === 37 || e.keyCode === 39) && $('.tuna').hasClass('staticmove') ) { // left arrow
       
        $('.tuna').removeClass('staticmove');
    }

});
*/
