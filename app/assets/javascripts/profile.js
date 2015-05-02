$(function()){
	//catch all clicks on a tags
	$("a").click(function(){
		//check if it has a hash
		if(this.hash()){
			var hash = this.hash.substr(1);
	//get rid of the # sign
	
		var $toElement = $("a[name=" + hash + "]");
	//get the postition of a name element
		var toPosition = $toElement.postition().top;
	
	//scroll/animate to that element
	$("body,html").animate({
		scrollTop :toPosition
	},2000,"easOutExpo");
	//don't do the jump
	return false;
		}
	});

});