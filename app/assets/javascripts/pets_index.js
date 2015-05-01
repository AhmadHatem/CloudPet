var lastScrollTop = 0;
var xposition = 0;
var yposition = 0;
var menuShown = false;
$(document).ready(function() {
	$('.pet').find('#DEF').hide();
	$('.new-pet-form').height($(document).height());
	//$('li').height($('li').find('.pet').height()-17);
		/*$(window).scroll(function(){
			var scrollTop = $(this).scrollTop();
			var opacity = $('.pet').css('opacity');
			if(scrollTop < lastScrollTop) {
				if(opacity < 1)
					$('.pet').fadeTo(1, opacity+0.5);
			}
			else {
				if(opacity > 0)
					$('.pet').fadeTo(1, opacity-0.5);
			}
			lastScrollTop = scrollTop;
			//$('.pet .pet-profile-photo-right').toggleClass('selected');	
		})*/
	$(document).mousemove(function(e) {
		xposition = e.pageX;
		yposition = e.pageY;
	})
	$('.pet').mousemove(function() {
		$(this).find('#DEF').css({'left': xposition, 'top': yposition});
	})
	$('.pet').hover(function() {
		//$(this).find('#DEF').css({'left': xposition, 'top': yposition});
		$(this).addClass('hovered');
		if(!menuShown) {
			$(this).find('#DEF').show('fast');
		}
	})
	$('.pet').mouseleave(function(event) {
		/* Act on the event */
		$(this).removeClass('hovered');
		$(this).find('#DEF').hide('fast');
	});
	$('.new-pet-form #new-pet-button').click(function() {
		toggleMenu();
	})

	$('.new-pet-form #new-pet-button').hover(function() {
		$(this).addClass('hovered');
	})

	$('.new-pet-form #new-pet-button').mouseleave(function() {
		$(this).removeClass('hovered');
	})
	$('.pet-list').click(function() {
		if(menuShown)
			toggleMenu();
	})
	/*$('.pet').hover(function() {
		$(this).find('#DEF').show('fast');
	})
	$('.pet').mouseleave(function(event) {
		$(this).find('#DEF').hide('fast');
	});*/
		
});

/*$('.new-pet-form #new-pet-button').on('click', function(){
	$(this).toggleMenu();
});*/
/*$(document).on('scroll', function() {
	$('.new-pet-form #new-pet-button').marginTop = $(document).scrollTop();
})*/

toggleMenu = function() {
	if($('.new-pet-form').css('margin-left') < '0px') {
		menuShown = true;
		$('.pet-list').animate({'margin-left': '502px'}, 'fast');
		$('.new-pet-form').animate({'margin-left': '0px'}, 'fast');
	}
	else {
		menuShown = false;
		$('.pet-list').animate({'margin-left': '0px'}, 'fast');
		$('.new-pet-form').animate({'margin-left': '-504px'}, 'fast');
	}
}

/*$('.pet').on('hover', function() {
	$(this).find('#DEF').show('fast');
})

$('.pet').on('mouseleave', function() {
	$(this).find('#DEF').hide('fast');
})


$('.pet .pet-profile-photo').on('click', function(){
	$(this).addClass('selected');	
})*/

