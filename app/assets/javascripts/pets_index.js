var lastScrollTop = 0;
var xposition = 0;
var yposition = 0;
var menuShown = false;
$(document).ready(function() {
	$('.pet').find('#DEF').hide();
	$('.new-pet-form').height($(document).height());
	/* change mouse position variables when 
	changing mouse position on page */
	$(document).mousemove(function(e) {
		xposition = e.pageX;
		yposition = e.pageY;
	})
	/* changing info div position upon mouse move */
	$('.pet').mousemove(function() {
		$(this).find('#DEF').css({
			'left': xposition, 'top': yposition});
	})
	/* show info upon hover on div */
	$('.pet').hover(function() {
		$(this).addClass('hovered');
		if(!menuShown) {
			$(this).find('#DEF').show('fast');
		}
	})
	/* hide div upon mouse leave */
	$('.pet').mouseleave(function(event) {
		$(this).removeClass('hovered');
		$(this).find('#DEF').hide('fast');
	});
	/* changing menu when clicked on button */
	$('.new-pet-form #new-pet-button').click(function() {
		toggleMenu();
	})
	/* changing div style when hovering */
	$('.new-pet-form #new-pet-button').hover(function() {
		$(this).addClass('hovered');
	})
	/* remove this class (style) when mouse leaves */
	$('.new-pet-form #new-pet-button').mouseleave(function() {
		$(this).removeClass('hovered');
	})
	/* close menu if clicked outside the box */
	$('.pet-list').click(function() {
		if(menuShown)
			toggleMenu();
	})

		
});

/* toggle menu open and close */
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


